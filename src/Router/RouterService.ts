import { Router } from "express";
import { Logger } from "log4js";
import { DoctorController } from "../Controller/DoctorController";

export class RouterService {
  router: Router;
  public controller: DoctorController = new DoctorController();
  constructor() {
    this.router = Router();
    this.Route(this.router);
  }
  public Route(app: any) {
    this.router = app;
    this.router.get("/", this.controller.Home);
    this.router.post("/save", this.controller.save);
    this.router.get("/user", this.controller.findAll);
  }
}
