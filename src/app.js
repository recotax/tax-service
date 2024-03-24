import ExpressHttpServer from './infra/http/ExpressHttpServer';
import { logger } from './utils/log-utils';

dotenv.config();
const httpServer = new ExpressHttpServer();
logger.log({
  level: 'info',
  message: 'Application started succesfully',
});

httpServer.app.use((req, res) => {
  logger.log({
    level: 'info',
    message: `${req.method} - ${req.path}`,
  });
  next();
});

httpServer.listen(3001);
