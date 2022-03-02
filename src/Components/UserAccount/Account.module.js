const axios = require('axios');
const { Settings } = require('../../config');

module.exports = ({ UserToken }) => {

    const config = {
        method: 'get',
        url: Settings.Account.API.ME,
        headers: {
            Authorization: UserToken,
        }
    };
    
    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;
            let flags = [];
            let flagspv = []
            let flagbuy = []

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

            if ((req.flags & Discord_Employee) == Discord_Employee) { flagspv.push('Discord Employee'); }
            if ((req.flags & Partnered_Server_Owner) == Partnered_Server_Owner) { flagspv.push('Partnered Server Owner'); }
            if ((req.flags & HypeSquad_Events) == HypeSquad_Events) { flagspv.push('HypeSquad Events'); }
            if ((req.flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) { flagspv.push('Bug Hunter Level 1'); }
            if ((req.flags & House_Bravery) == House_Bravery) { flagspv.push('House Bravery'); }
            if ((req.flags & House_Brilliance) == House_Brilliance) { flagspv.push('House Brilliance'); }
            if ((req.flags & House_Balance) == House_Balance) { flagspv.push('House Balance'); }
            if ((req.flags & Early_Supporter) == Early_Supporter) { flagspv.push('Early Supporter'); }
            if ((req.flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) { flagspv.push('Bug Hunter Level 2'); }
            if ((req.flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) { flagspv.push('Early Verified Bot Developer'); }

            if ((req.purchased_flags & Discord_Employee) == Discord_Employee) { flagbuy.push('Discord Employee'); }
            if ((req.purchased_flags & Partnered_Server_Owner) == Partnered_Server_Owner) { flagbuy.push('Partnered Server Owner'); }
            if ((req.purchased_flags & HypeSquad_Events) == HypeSquad_Events) { flagbuy.push('HypeSquad Events'); }
            if ((req.purchased_flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) { flagbuy.push('Bug Hunter Level 1'); }
            if ((req.purchased_flags & House_Bravery) == House_Bravery) { flagbuy.push('House Bravery'); }
            if ((req.purchased_flags & House_Brilliance) == House_Brilliance) { flagbuy.push('House Brilliance'); }
            if ((req.purchased_flags & House_Balance) == House_Balance) { flagbuy.push('House Balance'); }
            if ((req.purchased_flags & Early_Supporter) == Early_Supporter) { flagbuy.push('Early Supporter'); }
            if ((req.purchased_flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) { flagbuy.push('Bug Hunter Level 2'); }
            if ((req.purchased_flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) { flagbuy.push('Early Verified Bot Developer'); }

            if (req.avatar !== null) req.avatar = { png: Settings.Account.AVATAR + req.id + '/' + req.avatar + '.png?size=2048', jpg: Settings.Account.AVATAR + req.id + '/' + req.avatar + '.jpg?size=2048', jpeg: Settings.Account.AVATAR + req.id + '/' + req.avatar + '.jpeg?size=2048', webp: Settings.Account.AVATAR + req.id + '/' + req.avatar + '.webp?size=2048', gif: Settings.Account.AVATAR + req.id + '/' + req.avatar + '.gif?size=2048', }; else req.avatar = null
            if (req.banner !== null) req.banner = { png: Settings.Account.BANNER + req.id + '/' + req.banner + '.png?size=2048', jpg: Settings.Account.BANNER + req.id + '/' + req.banner + '.jpg?size=2048', jpeg: Settings.Account.BANNER + req.id + '/' + req.banner + '.jpeg?size=2048', webp: Settings.Account.BANNER + req.id + '/' + req.banner + '.webp?size=2048', gif: Settings.Account.BANNER + req.id + '/' + req.banner + '.gif?size=2048', }; else req.banner = null

            resolve({ id: req.id, username: req.username, discriminator: req.discriminator, tag: req.username + '#' + req.discriminator, email: req.email, phone: req.phone, NSFW: req.nsfw_allowed, MFA: req.mfa_enabled, verified: req.verified, avatar: req.avatar, banner: req.banner, bannerColor: req.banner_color, accentColor: req.accent_color, bio: req.bio, badges: flags, pvBadges: flagspv, requestedBadges: flagbuy })
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });

}


