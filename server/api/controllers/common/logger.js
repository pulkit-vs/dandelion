
/**
 * @class Logger
 *
 * @description
 *    API controller for Logger
 *
 * @author
 *  Nikhil Aggarwal, VectoScalar
 *
 */
'use strict';
const {
  createLogger,
  format,
  transports,
  addColors
} = require('winston');

require('winston-daily-rotate-file');
const moment = require('moment');

const config = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    data: 3,
    debug: 4,
    verbose: 5,
    silly: 6,
    custom: 7
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    data: 'grey',
    debug: 'blue',
    verbose: 'cyan',
    silly: 'magenta',
    custom: 'yellow'
  }
};

addColors(config.colors);

// TR: console'da sadece hepsi tutuluyor olacak çünkü info log seviyesinden sonra diğer tüm log seviyeleri sıralanmış
// EN: all log level will be shown in Console, because 'info' is on the top of list with 0 value.
const transportConsole = new transports.Console({
  json: false,
  timestamp: () => `[${(moment().format())}]`,
  prettyPrint: true,
  colorize: true,
  format: format.colorize({
    all: true
  }),
  level: 'verbose',
}),
  transportFileDebug = new transports.File({
    filename: './logs/debug.log',
    level: 'debug',
  }),
  transportFileInfo = new transports.File({
    filename: './logs/info.log',
    level: 'info',
  }),
  transportFileError = new transports.File({
    filename: './logs/errors.log',
    level: 'error',
  }),
  transportErrorDailyRotate = new transports.DailyRotateFile({
    filename: './logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'error', // get all logs.. as it is
    maxSize: '20m',
    // maxFiles: '14d'
  }),
  transportDailyRotate = new transports.DailyRotateFile({
    filename: './logs/log-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'verbose', // get all logs.. as it is
    maxSize: '20m',
    // maxFiles: '14d'
  });

const logger = createLogger({
  format: format.combine(
    format.label({
      label: '[my-label]'
    }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    //
    // The simple format outputs
    // `${level}: ${message} ${[Object with everything else]}`
    //
    // format.simple()
    //
    // Alternatively you could use this custom printf format if you
    // want to control where the timestamp comes in your final message.
    // Try replacing `format.simple()` above with this:
    //
    format.splat(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    transportConsole,
    transportFileDebug,
    transportFileInfo,
    transportFileError,
    transportErrorDailyRotate,
    transportDailyRotate
  ],
  exceptionHandlers: [
    transportConsole,
    transportFileError,
    transportErrorDailyRotate
  ],
  exitOnError: false
});

module.exports = logger;