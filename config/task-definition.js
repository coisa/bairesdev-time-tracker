const clientMeet = {
    category: 'Meetings (Client)',
    task: 'Other - Meetings (Client)',
    descriptionId: 1000,
    hours: 1,
};

module.exports = Object.freeze({
    tasks: {
        clientMeet,
        english: {
            category: 'Meetings (Internal)',
            task: 'Other - Meetings (Internal)',
            comments: 'English class'
        },
        standUp: {
            category: 'Meetings (Client)',
            task: 'Daily Meeting',
            descriptionId: 909,
            hours: 0.5,
            randomHours: {
                min: 0.25,
                max: 0.5,
                step: 0.25,
            },
            condition: ({ day }) => day.weekday() === 2 || day.weekday() === 4,
        },
        email: {
            category: 'Administrative',
            task: 'Email revision/answering',
            descriptionId: 775,
            hours: 0.5,
            randomHours: {
                min: 0.25,
                max: 0.5,
                step: 0.25,
            },
        },
        timeTracker: {
            category: 'Administrative',
            task: 'Registering hours in time tracker tools',
            descriptionId: 4417,
            hours: 0.25,
            randomHours: {
                min: 0.25,
                max: 0.5,
                step: 0.25,
            },
            condition: ({ day }) => day.isSame(new Date(), 'day'),
        },
        sick: {
            category: 'Absence',
            task: 'Sick leave',
            descriptionId: 752,
            hours: 8,
        },
        readDocs: {
            category: 'Documentation',
            task: 'Documentation reading',
            descriptionId: 874,
            hours: 1,
            randomHours: {
                min: 0.25,
                max: 1.5,
                step: 0.25,
            },
        },
        testManual: {
            category: 'Testing',
            task: 'Manual testing',
            descriptionId: 974,
            hours: 2,
            randomHours: {
                min: 0.5,
                max: 2,
                step: 0.5,
            },
        },
        debug: {
            category: 'Development',
            task: 'Debug',
            descriptionId: 800,
            hours: 2,
            randomHours: {
                min: 1,
                max: 3,
                step: 0.25,
            },
        },
        feature: {
            category: 'Development',
            task: 'Features development',
            descriptionId: 783,
            hours: 4,
            randomHours: {
                min: 2,
                max: 6,
                step: 0.5,
            },
        },
        bugfix: {
            category: 'Development',
            task: 'Bug Fixing',
            descriptionId: 787,
            hours: 2,
            randomHours: {
                min: 2,
                max: 5,
                step: 0.25,
            },
        },
        unitTest: {
            category: 'Development',
            task: 'Test cases development',
            descriptionId: 784,
            hours: 2,
            randomHours: {
                min: 2,
                max: 4,
                step: 0.25,
            },
        },
        holiday: {
            category: 'Absence',
            task: 'National Holiday',
            descriptionId: 749,
            hours: 8
        },
        monthlyFranchise: {
            ...clientMeet,
            comments: 'Monthly Franchise Updates',
        },
        manager1o1: {
            category: 'Meetings (Internal)',
            task: '1:1 meeting with Manager',
            descriptionId: 938,
            hours: 1,
        },
        hr1o1: {
            category: 'Meetings (Internal)',
            task: 'Other - Meetings (Internal)',
            comments: 'C&D PxP Meeting',
            descriptionId: 1013,
            hours: 1
        },
        refinement: {
            category: 'Meetings (Client)',
            task: 'Backlog refinement meeting',
            hours: 1,
        },
        allHands: {
            ...clientMeet,
            comments: 'PM Company All Hands',
        },
        codeReview: {
            category: 'Development',
            task: 'Code review',
            descriptionId: 779,
            hours: 1,
            randomHours: {
                min: 1,
                max: 3,
                step: 0.25,
            },
        },
        townHall: {
            ...clientMeet,
            comments: 'PM Company Town Hall',
        },
        teamBuilding: {
            category: 'Meetings (Internal)',
            task: 'Other - Meetings (Internal)',
            comments: 'Aristocrat Team Building',
            descriptionId: 1013,
            hours: 1,
        },
        mentoring: {
            category: 'Training (Trainer)',
            task: 'Providing mentoring support',
            descriptionId: 998,
            hours: 1,
            recordTypeId: 2,
        },
        vacation: {
            category: 'Absence',
            task: 'Vacations',
            hours: 8,
            descriptionId: 751,
        }
    }
});
