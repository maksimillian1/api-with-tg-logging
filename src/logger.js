const TelegramLogger = require('node-telegram-logger')

let tg = new TelegramLogger(process.env.TG_TOKEN, process.env.TG_CHANNEL)
const winston = require('winston')
const logger = winston.createLogger({
    level: 'info',
    transports: [
        tg.setWinstonTransporter(tg)
    ]
});

const LOG_LEVEL = {
    INFO: 'info',
    ERROR: 'error'
};

module.exports = {
    logger,
    LOG_LEVEL
};
