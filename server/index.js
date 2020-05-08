/* eslint consistent-return:0 import/order:0 */

const express = require("express");
const logger = require("./logger");
const favicon = require("serve-favicon");
const path = require("path");
const rawicons = require("./rawicons");
const rawdocs = require("./rawdocs");
const argv = require("./argv");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const setup = require("./middlewares/frontendMiddleware");
const isDev = process.env.NODE_ENV !== "production";
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require("ngrok")
    : false;
const { resolve } = require("path");
const app = express();
const OPTIONS = require("../server/api/swagger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const expressSwagger = require("express-swagger-generator")(app);

// load our routes and pass in our app
require("../server/api/routes")(app);

// passing swagger config options to the expressgenerator
expressSwagger(OPTIONS);

// script create all the tables in database if not exist
require("../server/sql-table");

// Load material icons
app.use("/api/icons", (req, res) => {
  res.json({
    records: [{ source: rawicons(req.query) }],
  });
});

// Load code preview
app.use("/api/docs", (req, res) => {
  res.json({
    records: [{ source: rawdocs(req.query) }],
  });
});

app.use("/", express.static("public", { etag: false }));
app.use(favicon(path.join("public", "favicons", "favicon.ico")));

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), "build"),
  publicPath: "/",
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || 3001;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || "localhost";

// use the gzipped bundle
app.get("*.js", (req, res, next) => {
  req.url = req.url + ".gz"; // eslint-disable-line
  res.set("Content-Encoding", "gzip");
  next();
});

// Start your app.
app.listen(port, host, async (err) => {
  console.log(
    `Swagger That API listening on port ${port}! ENV : ${process.env.NODE_ENV}`
  );
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
