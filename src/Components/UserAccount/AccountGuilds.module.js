const axios = require('axios');
const { Settings } = require('../../config');

module.exports = ({ UserToken }) => {

    const config = {
        method: 'get',
        url: Settings.Account.API.GUILDS,
        headers: {
            Authorization: UserToken,
        }
    };

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;
            let GUILD = []
            
            req.forEach(guild => {
                if (req.icon !== null) guild.icon = { png: Settings.Guild.ICON + guild.id + '/' + guild.icon + '.png?size=2048', jpg: Settings.Guild.ICON + guild.id + '/' + guild.icon + '.jpg?size=2048', jpeg: Settings.Guild.ICON + guild.id + '/' + guild.icon + '.jpeg?size=2048', webp: Settings.Guild.ICON + guild.id + '/' + guild.icon + '.webp?size=2048', gif: Settings.Guild.ICON + guild.id + '/' + guild.icon + '.gif?size=2048', }; else guild.icon = { png: null, jpg: null, jpeg: null, webp: null, gif: null, }
                GUILD.push({ id: guild.id, name: guild.name, icon: guild.icon, owner: guild.owner, permissions: guild.permissions, features: guild.features, })
            })
            resolve(GUILD)
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
}


