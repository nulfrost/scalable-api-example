const { App } = require("@tinyhttp/app");
const { logger } = require("@tinyhttp/logger");

const app = new App();

app.use(
  logger({
    timestamp: { format: "HH:mm:ss" },
    output: { callback: console.log, color: true },
    emoji: true,
  })
);

app.get("/", (_, res) => {
  res.status(200).json({
    message: "Welcome to the Cars API",
    date: Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date()),
    version: "1",
  });
});

module.exports = app;
