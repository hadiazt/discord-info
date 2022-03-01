const axios = require('axios');

const { Guild } = require('./config');

exports.GUILD = ({ url }) => {
    config = {
        method: 'get',
        url: Guild.API + url + '?with_counts=true',
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;
        }).catch(reject);
    });

};