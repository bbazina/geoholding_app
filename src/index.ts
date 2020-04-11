import * as dotenv from 'dotenv';
import * as express from 'express';

dotenv.config();

const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(process.env.$PORT, function () {
  console.log('App is listening on port 3000!');
});
