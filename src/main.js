require('dotenv').config();
const server = require('express')();
const {logger, LOG_LEVEL} = require("./logger");

server.get('/test', (req, res) => {
    logger.log(LOG_LEVEL.INFO, 'Hello distributed log files!');
    logger.log(LOG_LEVEL.ERROR, 'Hello distributed log files!');
    res.json({test: 123}).status(200);
});

server.listen(3000);
m
