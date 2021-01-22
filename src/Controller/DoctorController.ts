import { Request, Response } from "express";
import { getLogger } from "log4js";
import Doctor from "../Model/Doctor";
import { Logger } from "../Config/Logger";

export class DoctorController {
  public Home(request: Request, response: Response) {
    const log = getLogger("DoctorController");
    response.status(200).send({
      message: `Runnig ==> ${Date().toLocaleString()}`,
    });
    log.info("Thia running fine");
  }
  public async findAll(_requ: Request, resp: Response): Promise<any> {
    const log = getLogger("DoctorController");
    await Doctor.find({})
      .then((promise) => {
        if (promise) {
          resp.send(promise);
          log.info(
            "Inside the DoctorController method of findAll::user data fetched from DB"
          );
        } else {
          resp.status(500).send(promise);
          log.error(
            "Inside the DoctorController method of findAll::data is not fetched from the DB" +
              promise
          );
        }
      })
      .catch((errr) => log.error("Inside the DoctorController::" + errr));
  }

  public async save(requ: Request, resp: Response): Promise<void> {
    const log = getLogger("DoctorController");
    const doctor = requ.body;
    await Doctor.create(doctor)
      .then((promise) => {
        if (promise) {
          resp.send(promise);
          log.info("Inside the DoctorController method of save Data is saved");
        } else {
          resp.send(promise);
          log.error(
            "Inside the DoctorController method of save::Data is not saved" +
              promise
          );
        }
      })
      .catch((error) =>
        log.error("Inside the DoctorController method of save::" + error)
      );
  }
}
