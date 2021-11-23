import * as dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

app.listen(process.env.PORT, () => console.log(`[Server.js]: listening on ${process.env.PORT}...`))

app.get('/', function(_, res) {
  res.write('This is a normal request, it should be logged to the console too');
  res.end();
});

app.get('/api', function(_, res) {
  res.write('Response for /api');
  res.end();
});

export {}