const { range, sample } = require('lodash');

const randomHours = (min, max, step) => {
    const hours = range(min, max + step, step)

    return sample(hours)
}

module.exports = {
    randomHours,
}
