"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorController = void 0;
const log4js_1 = require("log4js");
const Doctor_1 = require("../Model/Doctor");
class DoctorController {
    Home(request, response) {
        const log = log4js_1.getLogger("DoctorController");
        response.status(200).send({
            message: `Runnig ==> ${Date().toLocaleString()}`,
        });
        log.info("Thia running fine");
    }
    findAll(_requ, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const log = log4js_1.getLogger("DoctorController");
            yield Doctor_1.default.find({})
                .then((promise) => {
                if (promise) {
                    resp.send(promise);
                    log.info("Inside the DoctorController method of findAll::user data fetched from DB");
                }
                else {
                    resp.status(500).send(promise);
                    log.error("Inside the DoctorController method of findAll::data is not fetched from the DB" +
                        promise);
                }
            })
                .catch((errr) => log.error("Inside the DoctorController::" + errr));
        });
    }
    save(requ, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const log = log4js_1.getLogger("DoctorController");
            const doctor = requ.body;
            yield Doctor_1.default.create(doctor)
                .then((promise) => {
                if (promise) {
                    resp.send(promise);
                    log.info("Inside the DoctorController method of save Data is saved");
                }
                else {
                    resp.send(promise);
                    log.error("Inside the DoctorController method of save::Data is not saved" +
                        promise);
                }
            })
                .catch((error) => log.error("Inside the DoctorController method of save::" + error));
        });
    }
}
exports.DoctorController = DoctorController;
//# sourceMappingURL=DoctorController.js.map