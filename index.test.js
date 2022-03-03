const {
    Invite,
    User,
    Guild,
    GuildRoles,
    GuildEmojis,
    Account,
    AccountSettings,
    AccountGuilds,
} = require('discord-info')

Invite({ url: '' }).then((response) => { console.log(response) })

User({ UserID: '', BotToken: '' }).then((response) => { console.log(response) })

Guild({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

GuildRoles({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

GuildEmojis({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

Account({ UserToken: '' }).then((response) => { console.log(response) })

AccountSettings({ UserToken: '' }).then((response) => { console.log(response) })

AccountGuilds({ UserToken: '' }).then((response) => { console.log(response) })

// --------- OR --------- //

const INFO /* Or Every Var You Want */ = require('discord-info')


INFO.Invite({ url: '' }).then((response) => { console.log(response) })

INFO.User({ UserID: '', BotToken: '' }).then((response) => { console.log(response) })

INFO.Guild({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

INFO.GuildRoles({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

INFO.GuildEmojis({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

INFO.Account({ UserToken: '' }).then((response) => { console.log(response) })

INFO.AccountSettings({ UserToken: '' }).then((response) => { console.log(response) })

INFO.AccountGuilds({ UserToken: '' }).then((response) => { console.log(response) })


/************************************
    
    * Available function are : 👇
    * Invite (Required Valid Invite Code) 
    * User (Required UserID & BotToken) 
    * Guild (Required GuildID & BotToken) 
    * GuildRoles (Required GuildID & BotToken) 
    * GuildEmojis (Required GuildID & BotToken) 
    * Account (Required UserToken) 
    * AccountSettings (Required UserToken) 
    * AccountGuilds (Required UserToken) 
    
************************************/