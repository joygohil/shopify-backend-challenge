import * as winston from "winston";

const loggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
  msg: "HTTP {{req.method}} {{req.url}}",
  colorize: false,
  expressFormat: true,
  ignoreRoute: function (req, res) {
    return false;
  },
};
if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}
export default loggerOptions;
