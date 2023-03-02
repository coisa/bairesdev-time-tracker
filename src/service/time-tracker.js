process.env.TZ = 'UTC';

const Dialog = require("dialog-gui");

const { addTrack } = require('../http/time-tracker-api-client');
const { getWorkdayTasks, logTasksTable } = require('../service/task-service');
const { question } = require("../console/helper/readline");

const { projectId, focalPointId } = require('../../config/contract');

const trackRecord = async ({ descriptionId, hours, date, comments, recordTypeId, token }) => {
    date.hours(0).minutes(0).seconds(0).milliseconds(0);

    addTrack(token, {
        hours,
        descriptionId,
        comments,
        projectId,
        focalPointId,
        recordTypeId: recordTypeId || 1,
        date: date.toISOString(),
        employeeId: null,
    })
}

const registerTask = async ({
    task,
    day,
    token,
}) => {
    const hours = parseFloat(task.hours || 1)

    trackRecord({
        token,
        hours,
        date: day,
        comments: task.comments,
        descriptionId: task.descriptionId,
        recordTypeId: task.recordTypeId || 1,
    });
};

const registerWorkDay = async ({ day, token, noInteraction, withTasks = {} }) => {
    const tasks = getWorkdayTasks({ day, withTasks })

    const records = logTasksTable(tasks)

    const answer = noInteraction && 'y'
        || await question(`Register records for ${day.format()} (Y/n)`, 'y')

    if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 's') {
        console.warn(`No records sent for date ${day.format()}`)
        return
    }

    Object.values(tasks).forEach(async task => {
        await registerTask({ token, day, task })
    })
};

module.exports = {
    registerTask,
    registerWorkDay,
}
