const axios = require('axios').default

const baseURL = 'https://employees.bairesdev.com/api/v1';

const globalHeaders = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
};

const addTrack = async (token, parameters) => {
    const url = baseURL + '/employees/timetracker-record-upsert';
    const headers = { ...globalHeaders, "authorization": "Bearer " + token };

    await axios
        .put(url, parameters, { headers })
        .catch((rejectionError) => {
            console.error('Error trying to register a record:')
            console.table({
                request: parameters,
                response: {
                    status: rejectionError.response.status,
                    data: rejectionError.response.data,
                }
            })
        })
}

// cross-origin error!?
const getRegisteredTracksByDate = async (token, date) => {
    const url = baseURL + '/employees/records';
    const headers = { ...globalHeaders, "authorization": "Bearer " + token };

    const fromDate = date.clone().hours(0).minutes(0).seconds(0).milliseconds(0).toDate().toISOString()
    const toDate = date.clone().hours(23).minutes(59).seconds(59).milliseconds(0).toDate().toISOString()

    await axios
        .put(url, { fromDate, toDate }, { headers })
        .catch((rejectionError) => {
            console.error('Error trying recovery date records:')
            console.table({
                request: {
                    fromDate,
                    toDate,
                },
                response: {
                    status: rejectionError.response.status,
                    data: rejectionError.response.data,
                }
            })
        })
}

module.exports = {
    addTrack,
    getRegisteredTracksByDate,
}
