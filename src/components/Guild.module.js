const axios = require('axios');
const { Settings } = require('../config');

module.exports = ({ GuildID, BotToken }) => {
    config = {
        method: 'get',
        url: Settings.Guild.API + GuildID,
        headers: {
            'Authorization': 'Bot ' + BotToken,
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then(data => {
            const req = data.data;

            if (req.splash !== null) req.splash = Settings.Guild.SPLASH + req.id + '/' + req.splash + '.png?size=2048'; else req.splash = null
            if (req.banner !== null) req.banner = { png: Settings.Guild.BANNER + req.id + '/' + req.banner + '.png?size=2048', jpg: Settings.Guild.BANNER + req.id + '/' + req.banner + '.jpg?size=2048', jpeg: Settings.Guild.BANNER + req.id + '/' + req.banner + '.jpeg?size=2048', webp: Settings.Guild.BANNER + req.id + '/' + req.banner + '.webp?size=2048', gif: Settings.Guild.BANNER + req.id + '/' + req.banner + '.gif?size=2048', }; else req.banner = { png: null, jpg: null, jpeg: null, webp: null, gif: null, };
            if (req.icon !== null) req.icon = { png: Settings.Guild.ICON + req.id + '/' + req.icon + '.png?size=2048', jpg: Settings.Guild.ICON + req.id + '/' + req.icon + '.jpg?size=2048', jpeg: Settings.Guild.ICON + req.id + '/' + req.icon + '.jpeg?size=2048', webp: Settings.Guild.ICON + req.id + '/' + req.icon + '.webp?size=2048', gif: Settings.Guild.ICON + req.id + '/' + req.icon + '.gif?size=2048', }; else req.icon = { png: null, jpg: null, jpeg: null, webp: null, gif: null, }

            resolve({ id: req.id, name: req.name, ownerID: req.owner_id, description: req.description, splash: req.splash, discoverySplash: req.discovery_splash, icon: req.icon, banner: req.banner, applicationID: req.application_id, region: req.region, afkChannelID: req.afk_channel_id, afkTimeout: req.afk_timeout, systemChannelID: req.system_channel_id, widgetEnabled: req.widget_enabled, widgetChannelID: req.widget_channel_id, verificationLVL: req.verification_level, features: req.features, stickers: req.stickers, defaultMSGNotifications: req.default_message_notifications, mfaLVL: req.mfa_level, explicitContentFilter: req.explicit_content_filter, maxPresences: req.max_presences, maxMembers: req.max_members, maxVideoUsers: req.max_video_channel_users, vanityURL: req.vanity_url_code, boostLVL: req.premium_tier, boostCount: req.premium_subscription_count, systemChannelFlags: req.system_channel_flags, preferredLocale: req.preferred_locale, rulesChannelID: req.rules_channel_id, publicUpdatesChannelID: req.public_updates_channel_id, hubType: req.hub_type, premiumProgressBarEnabled: req.premium_progress_bar_enabled, NSFW: req.nsfw, NSFWLVL: req.nsfw_level, })
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
}