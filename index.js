const express = require("express");
const morgan = require("morgan");
const version = require("express-version-route");
const versionRequest = require("express-version-request");
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");

const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JDM Car shop API",
      description: "This is the API for dane's made up car shop",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://api.jdmcarshop.dev",
        description: "Production URL",
      },
      {
        url: "http://staging.jdmcarshop.dev",
        description: "Staging / dev URL",
      },
    ],
  },
  apis: ["./routes/v1/*.js"],
};

const specs = swaggerjsdoc(options);

app.use(morgan("dev"));
app.use(versionRequest.setVersionByAcceptHeader());
app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));

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

app.use(version.route(routesMap));

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
