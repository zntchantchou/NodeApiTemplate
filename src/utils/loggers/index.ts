import fs from "fs";
import * as dotenv from "dotenv";
import path from "path";
import morgan from "morgan";

dotenv.config();

const loggerFormat = JSON.stringify({
  method: ":method",
  url: ":url",
  http_version: ":http-version",
  response_time: ":response-time",
  status: ":status",
  content_length: ":res[content-length]",
  timestamp: ":date[iso]",
  headers_count: "req-headers-length",
});

// DEV
export const devLogger = morgan("dev");

// INFO

const infoLogPath = process.env.LOGS_PATH as string;
const infoLogStream = fs.createWriteStream(path.join(infoLogPath), {
  flags: "a",
});
export const infologger = morgan(loggerFormat, { stream: infoLogStream });

// ERRORS

const errorLogPath = process.env.ERROR_LOG_PATH as string;
const errorLogStream = fs.createWriteStream(path.join(errorLogPath), {
  flags: "a",
});

export const errorLogger = morgan(loggerFormat, {
  stream: errorLogStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

export const fileLoggers = [infologger, errorLogger];
