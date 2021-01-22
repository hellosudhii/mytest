"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocterSchema = void 0;
const mongoose = require("mongoose");
exports.DocterSchema = new mongoose.Schema({
    doctorid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    consultingtime: {
        type: String,
        required: true,
    },
});
exports.default = mongoose.model("doctordetails", exports.DocterSchema);
//# sourceMappingURL=Doctor.js.map