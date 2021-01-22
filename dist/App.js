"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const DBConnection_1 = require("./Config/DBConnection");
const Logger_1 = require("./Config/Logger");
const DoctorController_1 = require("./Controller/DoctorController");
const RouterService_1 = require("./Router/RouterService");
class App {
    constructor() {
        this.app = express.application;
        this.routerService = new RouterService_1.RouterService();
        this.app = express();
        this.configureApp();
        this.routerService.Route(this.app);
        this.dbInitialize();
        this.getLogg();
        this.getController();
    }
    configureApp() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(helmet());
    }
    getController() {
        new DoctorController_1.DoctorController();
    }
    getLogg() {
        new Logger_1.Logger().getLog();
    }
    dbInitialize() {
        new DBConnection_1.DBConnection().getConnection();
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map