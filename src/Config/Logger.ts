import * as log4js from "log4js";
import logconfig = require("./log4j.json");
export class Logger {
  public getLog() {
    log4js.configure(logconfig);
    const logger = log4js.getLogger("http");
    return logger;
  }
}
