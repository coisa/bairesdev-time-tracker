const { workingHours } = require("../../config/contract")
const { tasks } = require("../../config/task-definition")
const { defaultTasks } = require("../../config/workingday-default-tasks")
const { randomHours } = require("../helper/hours")

const getWorkdayTasks = ({ day, withTasks = [] }) => {
    let remainingTime = workingHours
    let taskPriorityTypes = defaultTasks

    const tasksOfDay = {}

    withTasks.forEach(dayTasks => {
        Object.entries(dayTasks).forEach(([taskName, taskDefinition]) => {
            tasksOfDay[taskName] = taskDefinition
            remainingTime -= taskDefinition.hours
        })
    })

    while (remainingTime > 0) {
        taskPriorityTypes.forEach((taskName) => {
            const taskDefinition = tasks[taskName]

            if ('condition' in taskDefinition && !taskDefinition.condition({ day, remainingTime })) {
                return
            }

            if ('randomHours' in taskDefinition) {
                const min = taskName in tasksOfDay ? tasksOfDay[taskName].hours : Math.min(
                    remainingTime,
                    taskDefinition.randomHours.min
                )
                const max = Math.min(remainingTime, taskDefinition.randomHours.max)
                const step = taskDefinition.randomHours.step

                if (remainingTime < max - min) {
                    return
                }

                taskDefinition.hours = randomHours(min, max, step)
            }

            tasksOfDay[taskName] = taskDefinition
            remainingTime -= taskDefinition.hours
        })

        // Reordena a prioridade para aumentar a entropia da resultante do dia
        // caso ainda tenham horas sobrando para declarar
        taskPriorityTypes = taskPriorityTypes.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    // Remore registros que não possuam hora atribuída
    const records = Object.entries(tasksOfDay).filter(([name, task]) => task.hours)

    return Object.fromEntries(records)
}

const logTasksTable = (tasks = {}) => {
    const records = Object.values(tasks)
        .reduce((accumulator, currentValue) => {
            accumulator.total.hours += currentValue.hours

            return accumulator
        }, { ...tasks, total: { hours: 0 } })

    console.table(records, ['task', 'comments', 'hours'])

    return records
}

module.exports = {
    getWorkdayTasks,
    logTasksTable,
}
