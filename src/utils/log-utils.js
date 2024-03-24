import winston from 'winston/lib/winston/config';

export const logger = winston.createLogger({
  lelve: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
  ),
  transports: [new winston.transports.Console()],
});
