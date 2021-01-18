import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import { DBConnection } from "./Config/DBConnection";
import { Logger } from "./Config/Logger";
import { DoctorController } from "./Controller/DoctorController";
import { RouterService } from "./Router/RouterService";

class App {
  public app = express.application;
  public routerService: RouterService = new RouterService();
  constructor() {
    this.app = express();
    this.configureApp();
    this.routerService.Route(this.app);
    this.dbInitialize();
    this.getLogg();
    this.getController();
  }
  private configureApp() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }
  private getController() {
    new DoctorController();
  }
  private getLogg() {
    new Logger().getLog();
  }
  private dbInitialize() {
    new DBConnection().getConnection();
  }
}
export default new App().app;
