const axios = require('axios');

const { Settings } = require('./config');

exports.GUILD = ({ url }) => {
    config = {
        method: 'get',
        url: Settings.Guild.API + url + '?with_counts=true',
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;

            // SPLASH
            if (req.guild.splash !== null) req.guild.splash = Settings.Guild.SPLASH + req.guild.id + '/' + req.guild.splash + '.png?size=2048'; else req.guild.splash = null


            resolve({
                inv: { invCode: req.code, invType: req.type, invExpireTime: req.expires_at, Channel: { id: req.channel.id, name: req.channel.name, type: req.channel.type } },
                guild: { id: req.guild.id, name: req.guild.name, memberCount: req.approximate_member_count, presenceCount: req.approximate_presence_count, description: req.guild.description, splash: req.guild.splash, banner: req.guild.banner, icon: req.guild.icon, verificationLVL: req.guild.verification_level, vanityURL: req.guild.vanity_url_code, boostCount: req.guild.premium_subscription_count, nsfw: { NSFW: req.guild.nsfw, NSFWlvl: req.guild.nsfw_level }, wlcScreen: req.guild.welcome_screen, features: req.guild.features }
            })

        }).catch(reject);
    });

};

