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
            resolve({
                code: {
                    invCode: req.code,
                    invType: req.type,
                    invExpireTime: req.expires_at
                },
                guild: {
                    id: req.guild.id,
                    name: req.guild.name,
                    memberCount: req.guild.approximate_member_count,
                    presenceCount: req.guild.approximate_presence_count,
                    description: req.guild.description,
                    splash: Guild.SPLASH + req.guild.id + '/' + req.guild.splash + '.png?size=2048',
                    banner: {
                        png: Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.png?size=2048',
                        jpg: Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.jpg?size=2048',
                        jpeg: Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.jpeg?size=2048',
                        webp: Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.webp?size=2048',
                        gif: Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.gif?size=2048',
                    },
                    icon: {
                        png: Guild.ICON + req.guild.id + '/' + req.guild.icon + '.png?size=2048',
                        jpg: Guild.ICON + req.guild.id + '/' + req.guild.icon + '.jpg?size=2048',
                        jpeg: Guild.ICON + req.guild.id + '/' + req.guild.icon + '.jpeg?size=2048',
                        webp: Guild.ICON + req.guild.id + '/' + req.guild.icon + '.webp?size=2048',
                        gif: Guild.ICON + req.guild.id + '/' + req.guild.icon + '.gif?size=2048',
                    },
                    verificationLVL: req.guild.verification_level,
                    vanityURL: req.guild.vanity_url_code,
                    boostCount: req.guild.premium_subscription_count,
                    nsfw: {
                        NSFW: req.guild.nsfw,
                        NSFWlvl: req.guild.nsfw_level
                    },
                    features: req.guild.features
                }
            })
        }).catch(reject);
    });

};