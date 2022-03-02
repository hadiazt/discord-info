const axios = require('axios');
const { Settings } = require('../config');

module.exports = ({ UserID, BotToken }) => {
    config = {
        method: 'get',
        url: Settings.User.API + UserID,
        headers: {
            'Authorization': 'Bot ' + BotToken,
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;
            let flags = [];

            const Discord_Employee = 1;
            const Partnered_Server_Owner = 2;
            const HypeSquad_Events = 4;
            const Bug_Hunter_Level_1 = 8;
            const House_Bravery = 64;
            const House_Brilliance = 128;
            const House_Balance = 256;
            const Early_Supporter = 512;
            const Bug_Hunter_Level_2 = 16384;
            const Early_Verified_Bot_Developer = 131072;

            if ((req.public_flags & Discord_Employee) == Discord_Employee) { flags.push('Discord Employee'); }
            if ((req.public_flags & Partnered_Server_Owner) == Partnered_Server_Owner) { flags.push('Partnered Server Owner'); }
            if ((req.public_flags & HypeSquad_Events) == HypeSquad_Events) { flags.push('HypeSquad Events'); }
            if ((req.public_flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) { flags.push('Bug Hunter Level 1'); }
            if ((req.public_flags & House_Bravery) == House_Bravery) { flags.push('House Bravery'); }
            if ((req.public_flags & House_Brilliance) == House_Brilliance) { flags.push('House Brilliance'); }
            if ((req.public_flags & House_Balance) == House_Balance) { flags.push('House Balance'); }
            if ((req.public_flags & Early_Supporter) == Early_Supporter) { flags.push('Early Supporter'); }
            if ((req.public_flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) { flags.push('Bug Hunter Level 2'); }
            if ((req.public_flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) { flags.push('Early Verified Bot Developer'); }

            if (req.avatar !== null) req.avatar = { png: Settings.User.AVATAR + req.id + '/' + req.avatar + '.png?size=2048', jpg: Settings.User.AVATAR + req.id + '/' + req.avatar + '.jpg?size=2048', jpeg: Settings.User.AVATAR + req.id + '/' + req.avatar + '.jpeg?size=2048', webp: Settings.User.AVATAR + req.id + '/' + req.avatar + '.webp?size=2048', gif: Settings.User.AVATAR + req.id + '/' + req.avatar + '.gif?size=2048', }; else req.avatar = null
            if (req.banner !== null) req.banner = { png: Settings.User.BANNER + req.id + '/' + req.banner + '.png?size=2048', jpg: Settings.User.BANNER + req.id + '/' + req.banner + '.jpg?size=2048', jpeg: Settings.User.BANNER + req.id + '/' + req.banner + '.jpeg?size=2048', webp: Settings.User.BANNER + req.id + '/' + req.banner + '.webp?size=2048', gif: Settings.User.BANNER + req.id + '/' + req.banner + '.gif?size=2048', }; else req.banner = null

            resolve({ id: req.id, username: req.username, discriminator: req.discriminator, tag: req.username + '#' + req.discriminator, avatar: req.avatar, banner: req.banner, bannerColor: req.banner_color, accentColor: req.accent_color, badges: flags, })
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
}