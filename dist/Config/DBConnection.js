"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const log4js_1 = require("log4js");
dotenv.config();
const connection_Url = `mongodb://mongoose-mongo-0.mongoose-service.default.svc.cluster.local:27017,mongoose-mongo-1.mongoose-service.default.svc.cluster.local:27017,mongoose-mongo-2.mongoose-service.default.svc.cluster.local:27017/seekmyDocter?`;
// const connection_Url: string = `mongodb://127.0.0.1:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// const connection_Url: string = process.env.MONGOOSE_URI_ATLAS;
// const connection_Url: string = `mongodb://127.0.0.1:8080/docter`;
class DBConnection {
    constructor() {
        this.log = log4js_1.getLogger("DBConnection");
    }
    getConnection() {
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
            this.log.error("Inside the getConnection --> Mongoose connection is disconnected... ");
            console.log("Mongoose connection is disconnected...");
        });
        process.on("SIGINT", () => {
            mongoose.connection.close(() => {
                this.log.error("Inside the getConnection --> Mongoose connection is disconnected due to app termination... ");
                console.log("Mongoose connection is disconnected due to app termination...");
                process.exit(0);
            });
        });
    }
}
exports.DBConnection = DBConnection;
// MONGOOSE_URI_ATLAS = mongodb+srv://userseek:imgLkosJjOSTcbmf@sjp.7ucmi.mongodb.net/seekmydoctor?retryWrites=true&w=majority
//# sourceMappingURL=DBConnection.js.map