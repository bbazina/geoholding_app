import * as express from 'express';
export class App {
  public static start() {
    const PORT = Config.getString(ENV.PORT);
    const app: express.Application = express();

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });
    app.listen(PORT, function () {
      console.log(`App is listening on port ${PORT}!`);
    });
  }
}
