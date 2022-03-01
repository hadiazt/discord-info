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
                }
            })
        }).catch(reject);
    });

};