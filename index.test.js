const { Invite, User, Guild, GuildRoles, GuildEmojis, Account , AccountSettings , AccountGuilds} = require('./src/handler.js')

Invite({ url: '' }).then((response) => { console.log(response) })

User({ UserID: '', BotToken: '' }).then((response) => { console.log(response) })

Guild({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

GuildRoles({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

GuildEmojis({ GuildID: '', BotToken: '' }).then((response) => { console.log(response) })

Account({ UserToken: '' }).then((response) => { console.log(response) })

AccountSettings({ UserToken: '' }).then((response) => { console.log(response) })

AccountGuilds({ UserToken: '' }).then((response) => { console.log(response) })

