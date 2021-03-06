const path = require("path")
module.exports = {
      development: false,
    prefix: process.env.PREFIX || '!',
    botName: process.env.BOT_NAME || 'Nobita Nobi',
    developer: {
        uid: 100027477920916,
        email: 'agicute5@gmail.com',
        github: 'Jobys-997'
    },
    database: {
        postgres: {
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
        },
        sqlite: {
            storage: path.resolve(__dirname, "./data.sqlite"),
        },
    },
    appStateFile: path.resolve(__dirname, '../appstate.json'),
    swear: {
        limit: 2
    },
    admins: (process.env.ADMINS || '100027477920916_100043856164884').split('_').map(e => parseInt(e))
}
