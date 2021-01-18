import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import { getLogger, Logger } from "log4js";

dotenv.config();
// const connection_Url = `mongodb://mongg-0.mongo.db.svc.cluster.local:27017,mongg-1.mongo.db.svc.cluster.local:27017,mongg-2.mongo.db.svc.cluster.local:27017/seekmyDocter?`
// const connection_Url: string = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const connection_Url: string = process.env.MONGOOSE_URI_ATLAS;
export class DBConnection {
  log: Logger = getLogger("DBConnection");
  public getConnection() {
    mongoose
      .connect(connection_Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        this.log.info("Inside the getConnection -> Mongo db is connected");
        console.log("Mongodb connected....");
      })
      .catch((err) => this.log.error(err.message));

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to db...");
      this.log.info("Inside the getConnection -> Mongo db is connected");
    });

    mongoose.connection.on("error", (err) => {
      this.log.error(err.message);
      console.log(err.message);
    });

    mongoose.connection.on("disconnected", () => {
      this.log.error(
        "Inside the getConnection --> Mongoose connection is disconnected... "
      );
      console.log("Mongoose connection is disconnected...");
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        this.log.error(
          "Inside the getConnection --> Mongoose connection is disconnected due to app termination... "
        );
        console.log(
          "Mongoose connection is disconnected due to app termination..."
        );
        process.exit(0);
      });
    });
  }
}
