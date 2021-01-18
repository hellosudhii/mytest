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
    log.info("huuuuvaaa");
  }
  public async findAll(_requ: Request, resp: Response): Promise<any> {
    const log = getLogger("DoctorController");
    await Doctor.find({}, (error, data) => {
      if (data) {
        resp.send(data);
        log.info(
          "Inside the DoctorController method of findAll::user data fetched from DB"
        );
        // this.Log(this.log.info("Inside the DoctorController --> fetch data "));
      }
      if (error) {
        resp.status(500).send(error);
        log.error(
          "Inside the DoctorController method of findAll::data is not fetched from the DB" +
            error
        );
      }
    }).catch((errr) => console.log(errr));

    //  this.logs.error("Inside the DoctorController::" + errr)
  }

  public async save(requ: Request, resp: Response): Promise<void> {
    const log = getLogger("DoctorController");
    log.debug(requ.body);
    const doctor = requ.body;
    await Doctor.create(doctor, (error: any, data: any) => {
      if (data) {
        resp.send(data);
        log.info("Inside the DoctorController method of save Data is saved");
      }
      if (error) {
        resp.send(error);
        log.error(
          "Inside the DoctorController method of save::Data is not saved" +
            error
        );
      }
    }).catch((errr) =>
      log.error("Inside the DoctorController method of save::" + errr)
    );
  }
}
