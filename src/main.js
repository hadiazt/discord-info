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

            // BANNER
            if (req.guild.banner !== null) req.guild.banner = { png: Settings.Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.png?size=2048', jpg: Settings.Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.jpg?size=2048', jpeg: Settings.Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.jpeg?size=2048', webp: Settings.Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.webp?size=2048', gif: Settings.Guild.BANNER + req.guild.id + '/' + req.guild.banner + '.gif?size=2048', }; else req.guild.banner = { png: null, jpg: null, jpeg: null, webp: null, gif: null, };

            // ICON
            if (req.guild.icon !== null) req.guild.icon = { png: Settings.Guild.ICON + req.guild.id + '/' + req.guild.icon + '.png?size=2048', jpg: Settings.Guild.ICON + req.guild.id + '/' + req.guild.icon + '.jpg?size=2048', jpeg: Settings.Guild.ICON + req.guild.id + '/' + req.guild.icon + '.jpeg?size=2048', webp: Settings.Guild.ICON + req.guild.id + '/' + req.guild.icon + '.webp?size=2048', gif: Settings.Guild.ICON + req.guild.id + '/' + req.guild.icon + '.gif?size=2048', }; else req.guild.icon = { png: null, jpg: null, jpeg: null, webp: null, gif: null, }

            // WLC SCREEN
            if (req.guild.welcome_screen) req.guild.welcome_screen = { description: req.guild.welcome_screen.description, WLCChannels: req.guild.welcome_screen.welcome_channels, }; else req.guild.welcome_scree = { description: null, WLCChannels: null }


        }).catch(reject);
    });

};

