import ExpressHttpServer from './infra/http/ExpressHttpServer.js';
import { logger } from './utils/log-utils.js';
import * as dotenv from 'dotenv';

dotenv.config();
const httpServer = new ExpressHttpServer();
logger.log({
  level: 'info',
  message: 'Application started succesfully',
});

httpServer.app.use((req, res, next) => {
  logger.log({
    level: 'info',
    message: `${req.method} - ${req.path}`,
  });
  next();
});

httpServer.listen(3001);
