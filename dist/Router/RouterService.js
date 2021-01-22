"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterService = void 0;
const express_1 = require("express");
const DoctorController_1 = require("../Controller/DoctorController");
class RouterService {
    constructor() {
        this.controller = new DoctorController_1.DoctorController();
        this.router = express_1.Router();
        this.Route(this.router);
    }
    Route(app) {
        this.router = app;
        this.router.get("/", this.controller.Home);
        this.router.post("/save", this.controller.save);
        this.router.get("/user", this.controller.findAll);
    }
}
exports.RouterService = RouterService;
//# sourceMappingURL=RouterService.js.map