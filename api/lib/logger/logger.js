const { format, createLogger, transports } = require("winston");

const { LOG_LEVEL } = require("../../config");

const formats = format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
    format.simple(),
    format.splat(),
    format.printf(info => `${info.timestamp} ${info.level.toUpperCase()}: [email:${info.message.email}] [location:${info.message.location}] [procType:${info.message.proc_type}] [log:${info.message.log}]`)
)

// 2023-05-04 12:12:12 INFO: [email:asd] [location:asd] [procType:asd] [log:{}]

const logger = createLogger({
    level: LOG_LEVEL,
    transports: [
        new (transports.Console)({ format: formats })
    ]
});

module.exports = logger;

