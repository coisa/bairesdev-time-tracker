const { InvalidArgumentError } = require('commander')
const Dialog = require('dialog-gui')
const moment = require('moment')

const { question } = require('../helper/readline')
const { getWorkingDays } = require('../../helper/date')

const { registerWorkDay } = require('../../service/time-tracker')
const { mandatoryTasks } = require('../../../config/mandatory-tasks')

module.exports = async ({ token, start, end, noInteraction = false }) => {
    if (!noInteraction && !(token && start && end)) {
        const dialogResponse = new Dialog('BairesDev TimeTracker')
            .entry('token','Token de autenticação')
            .calendar('start', 'Data de início')
            .calendar('end', 'Data de fim')
            .show()

        token = token || dialogResponse.token
        start = moment(dialogResponse.start, 'MM/DD/YYYY')
        end = moment(dialogResponse.end, 'MM/DD/YYYY')
    }

    const firstDayAtMonth = moment().startOf('month').format('YYYY-MM-DD')
    const fromDate = start
        || !noInteraction
            && await question(`Start tracking from date (default: ${firstDayAtMonth}): `, firstDayAtMonth)
        || (function() { throw new InvalidArgumentError('Start tracking date not given in no interaction mode') }())

    const today = moment().format('YYYY-MM-DD')
    const toDate = end
        || !noInteraction
            && await question(`End tracking to date (default: ${today}): `, today)
        || (function() { throw new InvalidArgumentError('End tracking date not given in no interaction mode') }())

    const workingDays = getWorkingDays(fromDate, toDate)

    token = token
        || !noInteraction
            && await question('Type the JWT Token: ')
        || (function() { throw new InvalidArgumentError('Token not given in no interaction mode') }())

    for (let i = 0; i < workingDays.length; i++) {
        const date = workingDays[i]
        const withTasks = mandatoryTasks.filter(record => moment(record.date).isSame(date))
            .map(record => record.tasks)

        await registerWorkDay({ token, noInteraction, withTasks, day: date });
    }
}
