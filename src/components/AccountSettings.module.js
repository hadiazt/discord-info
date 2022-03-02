const axios = require('axios');
const { Settings } = require('../config');

module.exports = ({ UserToken }) => {

    const config = {
        method: 'get',
        url: Settings.Account.API.SETTINGS,
        headers: {
            Authorization: UserToken,
        }
    };

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;
            resolve(req)
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
}


