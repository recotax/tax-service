import express from 'express';

export default class ExpressHttpServer {
  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  async on(method, url, callback, middleware) {
    const handlers = [];

    if (middleware) {
      handlers.push(middleware);
    }

    handlers.push(async (req, res) => {
      try {
        const id = req.params?.id;
        const output = await callback(req.query, req.body, req.headers, id);
        res.json(output);
      } catch (error) {
        res.status(error.statusCode).json({
          message: error.message,
        });
      }
    });

    this.app[method](url, ...handlers);
  }

  listen(port) {
    return this.app.listen(port);
  }
}
