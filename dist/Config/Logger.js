"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const log4js = require("log4js");
const logconfig = require("./log4j.json");
class Logger {
    getLog() {
        log4js.configure(logconfig);
        const logger = log4js.getLogger("http");
        return logger;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map