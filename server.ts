import * as dotenv from "dotenv";
import express from "express";
import {
  devLogger,
  // fileLoggers,
} from "./src/utils/loggers";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`[Server.js]: listening on ${process.env.PORT}...`)
);

// LOGGING

app.use(devLogger);
// app.use(fileLoggers);

// ROUTES

app.get("/", function (_, res) {
  res.write("This is a normal request, it should be logged to the console too");
  res.end();
});

app.get("/api", function (req, res) {
  res.write("Response for /api");
  res.end();
});

app.get("/error", function (req, res) {
  res.status(500).send("Response for /error");
  res.end();
});
export {};
