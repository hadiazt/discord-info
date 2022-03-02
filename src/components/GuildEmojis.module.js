const axios = require('axios');
const { Settings } = require('../config');

module.exports = ({ GuildID, token }) => {
    config = {
        method: 'get',
        url: Settings.Guild.API + GuildID,
        headers: {
            'Authorization': 'Bot ' + token,
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const emojis = data.data.emojis;
            resolve(emojis)
  }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
}