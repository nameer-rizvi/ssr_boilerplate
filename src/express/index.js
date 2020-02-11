require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");

const app = express();

app.use(cors());
app.use(helmet());

app.use(
  historyApiFallback({
    disableDotRule: true,
    htmlAcceptHeaders: ["text/html", "application/xhtml+xml"]
  })
);

const env = process.env.NODE_ENV;

// To set your environment variable, create
// a .env file in the project's root folder and
// write 'NODE_ENV=production' in it. Once saved,
// you will need to stop the server and restart
// it via npm script.

// https://www.npmjs.com/package/dotenv

const {
  log,
  endpoint,
  port: { server: port }
} = require("../shared/index");

app.listen(port, () => {
  log({
    emoji: "🚀",
    label: "[EXPRESS]",
    message: `Server listening on port ${port} in ${env} environment.`
  });
});

const api = require("./api");
const spa = require("./spa/index");

app.use(endpoint, api);
app.use(spa);
