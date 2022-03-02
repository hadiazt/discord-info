const axios = require('axios');

const { Settings } = require('./config');

exports.Invite = ({ url }) => {
    config = {
        method: 'get',
        url: Settings.Invite.API + url + '?with_counts=true',
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;

            if (req.guild.splash !== null) req.guild.splash = Settings.Invite.SPLASH + req.guild.id + '/' + req.guild.splash + '.png?size=2048'; else req.guild.splash = null
            if (req.guild.banner !== null) req.guild.banner = { png: Settings.Invite.BANNER + req.guild.id + '/' + req.guild.banner + '.png?size=2048', jpg: Settings.Invite.BANNER + req.guild.id + '/' + req.guild.banner + '.jpg?size=2048', jpeg: Settings.Invite.BANNER + req.guild.id + '/' + req.guild.banner + '.jpeg?size=2048', webp: Settings.Invite.BANNER + req.guild.id + '/' + req.guild.banner + '.webp?size=2048', gif: Settings.Invite.BANNER + req.guild.id + '/' + req.guild.banner + '.gif?size=2048', }; else req.guild.banner = { png: null, jpg: null, jpeg: null, webp: null, gif: null, };
            if (req.guild.icon !== null) req.guild.icon = { png: Settings.Invite.ICON + req.guild.id + '/' + req.guild.icon + '.png?size=2048', jpg: Settings.Invite.ICON + req.guild.id + '/' + req.guild.icon + '.jpg?size=2048', jpeg: Settings.Invite.ICON + req.guild.id + '/' + req.guild.icon + '.jpeg?size=2048', webp: Settings.Invite.ICON + req.guild.id + '/' + req.guild.icon + '.webp?size=2048', gif: Settings.Invite.ICON + req.guild.id + '/' + req.guild.icon + '.gif?size=2048', }; else req.guild.icon = { png: null, jpg: null, jpeg: null, webp: null, gif: null, }
            if (req.guild.welcome_screen) req.guild.welcome_screen = { description: req.guild.welcome_screen.description, WLCChannels: req.guild.welcome_screen.welcome_channels, }; else req.guild.welcome_scree = { description: null, WLCChannels: null }

            resolve({
                inv: { invCode: req.code, invType: req.type, invExpireTime: req.expires_at, Channel: { id: req.channel.id, name: req.channel.name, type: req.channel.type } },
                guild: { id: req.guild.id, name: req.guild.name, memberCount: req.approximate_member_count, presenceCount: req.approximate_presence_count, description: req.guild.description, splash: req.guild.splash, banner: req.guild.banner, icon: req.guild.icon, verificationLVL: req.guild.verification_level, vanityURL: req.guild.vanity_url_code, boostCount: req.guild.premium_subscription_count, nsfw: { NSFW: req.guild.nsfw, NSFWlvl: req.guild.nsfw_level }, wlcScreen: req.guild.welcome_screen, features: req.guild.features }
            })

        }).catch(e => { console.log(e.response.data.message || e) });
    });

};


exports.User = ({ UserID, token }) => {
    config = {
        method: 'get',
        url: Settings.User.API + UserID,
        headers: {
            'Authorization': 'Bot ' + token,
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;

            if (req.avatar !== null) req.avatar = { png: Settings.User.AVATAR + req.id + '/' + req.avatar + '.png?size=2048', jpg: Settings.User.AVATAR + req.id + '/' + req.avatar + '.jpg?size=2048', jpeg: Settings.User.AVATAR + req.id + '/' + req.avatar + '.jpeg?size=2048', webp: Settings.User.AVATAR + req.id + '/' + req.avatar + '.webp?size=2048', gif: Settings.User.AVATAR + req.id + '/' + req.avatar + '.gif?size=2048', }; else req.avatar = null
            if (req.banner !== null) req.banner = { png: Settings.User.BANNER + req.id + '/' + req.banner + '.png?size=2048', jpg: Settings.User.BANNER + req.id + '/' + req.banner + '.jpg?size=2048', jpeg: Settings.User.BANNER + req.id + '/' + req.banner + '.jpeg?size=2048', webp: Settings.User.BANNER + req.id + '/' + req.banner + '.webp?size=2048', gif: Settings.User.BANNER + req.id + '/' + req.banner + '.gif?size=2048', }; else req.banner = null

            resolve({
                id: req.id, username: req.username, discriminator: req.discriminator, tag: req.username + '#' + req.discriminator, avatar: req.avatar, banner: req.banner, bannerColor: req.banner_color, accentColor: req.accent_color, badges: req.public_flags,
            })
        }).catch(e => { console.log(e.response.data.message || e) });
    });
}


exports.Guild = ({ GuildID, token }) => {
    config = {
        method: 'get',
        url: Settings.Guild.API + GuildID,
        headers: {
            'Authorization': 'Bot ' + token,
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;

            if (req.splash !== null) req.splash = Settings.Guild.SPLASH + req.id + '/' + req.splash + '.png?size=2048'; else req.splash = null
            if (req.banner !== null) req.banner = { png: Settings.Guild.BANNER + req.id + '/' + req.banner + '.png?size=2048', jpg: Settings.Guild.BANNER + req.id + '/' + req.banner + '.jpg?size=2048', jpeg: Settings.Guild.BANNER + req.id + '/' + req.banner + '.jpeg?size=2048', webp: Settings.Guild.BANNER + req.id + '/' + req.banner + '.webp?size=2048', gif: Settings.Guild.BANNER + req.id + '/' + req.banner + '.gif?size=2048', }; else req.banner = { png: null, jpg: null, jpeg: null, webp: null, gif: null, };
            if (req.icon !== null) req.icon = { png: Settings.Guild.ICON + req.id + '/' + req.icon + '.png?size=2048', jpg: Settings.Guild.ICON + req.id + '/' + req.icon + '.jpg?size=2048', jpeg: Settings.Guild.ICON + req.id + '/' + req.icon + '.jpeg?size=2048', webp: Settings.Guild.ICON + req.id + '/' + req.icon + '.webp?size=2048', gif: Settings.Guild.ICON + req.id + '/' + req.icon + '.gif?size=2048', }; else req.icon = { png: null, jpg: null, jpeg: null, webp: null, gif: null, }

            resolve({
                id: req.id,
                name: req.name,
                ownerID: req.owner_id,
                description: req.description,
                splash: req.splash,
                discoverySplash: req.discovery_splash,
                icon: req.icon,
                banner: req.banner,
                applicationID: req.application_id,
                region: req.region,
                afkChannelID: req.afk_channel_id,
                afkTimeout: req.afk_timeout,
                systemChannelID: req.system_channel_id,
                widgetEnabled: req.widget_enabled,
                widgetChannelID: req.widget_channel_id,
                verificationLVL: req.verification_level,
                features: req.features,
                stickers: req.stickers,
                defaultMSGNotifications: req.default_message_notifications,
                mfaLVL: req.mfa_level,
                explicitContentFilter: req.explicit_content_filter,
                maxPresences: req.max_presences,
                maxMembers: req.max_members,
                maxVideoUsers: req.max_video_channel_users,
                vanityURL: req.vanity_url_code,
                boostLVL: req.premium_tier,
                boostCount: req.premium_subscription_count,
                systemChannelFlags: req.system_channel_flags,
                preferredLocale: req.preferred_locale,
                rulesChannelID: req.rules_channel_id,
                publicUpdatesChannelID: req.public_updates_channel_id,
                hubType: req.hub_type,
                premiumProgressBarEnabled: req.premium_progress_bar_enabled,
                NSFW: req.nsfw,
                NSFWLVL: req.nsfw_level,
            })
        }).catch(e => { console.log(e) });
    });
}


