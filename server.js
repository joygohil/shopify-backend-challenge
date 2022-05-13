import express from "express";
import * as expressWinston from "express-winston";
import cors from "cors";
import loggerOptions from "./helper/logger-options.js";
import * as config from "./config/local.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));
app.listen(config.server.port, () => {
  console.log(`Server running at http://localhost:${config.server.port}/`);
});
