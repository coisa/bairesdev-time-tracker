const { mandatoryTasks } = require('../../../config/mandatory-tasks')

const holidays = mandatoryTasks.filter(({ tasks }) => 'holiday' in tasks)
    .map(mandatoryTasks => { return { date: mandatoryTasks.date, name: mandatoryTasks.tasks.holiday.comment }})

module.exports = () => {
    console.table(holidays)
}
