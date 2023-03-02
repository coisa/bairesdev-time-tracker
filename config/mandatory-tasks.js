const { tasks: { townHall, allHands, manager1o1, holiday } } = require("./task-definition");

// Não é necessário cadastrar feriados aqui
module.exports = {
    mandatoryTasks: [
        { date: '2023-01-12', tasks: { townHall: townHall } },
        { date: '2023-01-23', tasks: { manager1o1 } },
        { date: '2023-01-26', tasks: { townHall } },

        { date: '2023-02-02', tasks: { allHands } },
        { date: '2023-02-09', tasks: { allHands } },
        { date: '2023-02-16', tasks: { allHands } },
        { date: '2023-02-27', tasks: { manager1o1 } },

        // Holidays
        { date: '2023-02-20', tasks: { holiday: { ...holiday, comment: 'Carnival' } } },
        { date: '2023-02-21', tasks: { holiday: { ...holiday, comment: 'Carnival' } } },
        { date: '2023-02-22', tasks: { holiday: { ...holiday, comment: 'Carnival', hours: 4 } } },
        { date: '2023-04-07', tasks: { holiday: { ...holiday, comment: 'Good Friday' } } },
        { date: '2023-04-21', tasks: { holiday: { ...holiday, comment: 'Tiradentes Day' } } },
        { date: '2023-05-01', tasks: { holiday: { ...holiday, comment: 'Labour Day' } } },
        { date: '2023-06-08', tasks: { holiday: { ...holiday, comment: 'Corpus Christi' } } },
        { date: '2023-09-07', tasks: { holiday: { ...holiday, comment: 'Independence Day' } } },
        { date: '2023-10-12', tasks: { holiday: { ...holiday, comment: 'Our Lady Aparecida/Children\'s Day' } } },
        { date: '2023-11-02', tasks: { holiday: { ...holiday, comment: 'All Saints\' Day' } } },
        { date: '2023-11-15', tasks: { holiday: { ...holiday, comment: 'Republic Proclamation Day' } } },
        { date: '2023-12-25', tasks: { holiday: { ...holiday, comment: 'Christmas Day' } } },
    ]
}
