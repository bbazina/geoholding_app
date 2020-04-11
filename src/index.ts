import * as dotenv from 'dotenv';
import * as express from 'express';

dotenv.config();

const PORT = process.env.PORT;

const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
