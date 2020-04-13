import * as dotenv from 'dotenv';
import * as express from 'express';
import { EnvVar, ENV } from './core/utils';

dotenv.config();

const PORT = EnvVar.getString(ENV.PORT);
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
