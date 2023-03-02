const moment = require('moment');
const momentRange = require('moment-range');
const WorkingDays = require('moment-working-days');

const workingDays = new WorkingDays();

momentRange.extendMoment(moment);

const getWorkingDays = (startDate, endDate) => {
    const startDay = moment(startDate)
    const endDay = moment(endDate)

    if (startDay.isAfter(endDay)) {
        return []
    }

    const range = moment.range(startDay, endDay);
    const days = range.by('days');

    return Array.from(days).filter(day => {
        return workingDays.isWorkingday(day);
    });
};

const getMonthWorkingDays = (date) => {
    return getWorkingDays(
        moment(date).startOf('month').format('YYYY-MM-DD hh:mm'),
        moment(date).endOf('month').format('YYYY-MM-DD hh:mm')
    );
};

const getYearWorkingDays = (date) => {
    return getWorkingDays(
        moment(date).startOf('year').format('YYYY-MM-DD hh:mm'),
        moment(date).endOf('year').format('YYYY-MM-DD hh:mm')
    );
}

module.exports = Object.freeze({
    getWorkingDays,
    getMonthWorkingDays,
    getYearWorkingDays,
});
