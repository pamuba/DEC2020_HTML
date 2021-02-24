const winston = require('winston')

//CommonJS

module.exports.logger = winston.createLogger({
    transports:[
        new winston.transports.File({
            level:'info',
            filename:'filelog_log.log',
            json:true,
            format:winston.format.combine(winston.format.timestamp(), winston.format.json())
        }),
        new winston.transports.File({
            level:'error',
            filename:'filelog_error.log',
            json:true,
            format:winston.format.combine(winston.format.timestamp(), winston.format.json())
        })
    ]
});
