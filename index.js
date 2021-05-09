const express = require("express");
const subdomain = require("express-subdomain");
const morgan = require("morgan");
const version = require("express-version-route");
const versionRequest = require("express-version-request");

const app = express();

app.use(morgan("dev"));
app.use(versionRequest.setVersionByAcceptHeader());

const routesMap = new Map();

app.get("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "Welcome to the cars API",
      version: 1,
    },
  });
});

routesMap.set("v1", require("./routes/v1/index"));
routesMap.set("default", (req, res) => {
  res.status(400).json({
    errors: [
      {
        status: 400,
        title: "Invalid API version.",
        detail: `An invalid API version was provided in the accept header: ${req.version}`,
      },
    ],
  });
});

app.use(subdomain("api", version.route(routesMap)));

app.use((_, res) => {
  res.status(404).json({
    errors: [
      {
        status: 404,
        title: "Invalid route.",
        detail: `Route ${req.path} was not found on the server.`,
      },
    ],
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    errors: [
      {
        status: 500,
        title: "Server error.",
        detail: `This error occurred on the server: ${err.stack}`,
      },
    ],
  });
});

module.exports = app;
