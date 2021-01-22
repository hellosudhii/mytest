import * as mongoose from "mongoose";

export interface Docter__interface extends mongoose.Document {
  doctorid: string;
  name: string;
  qualification: string;
  specialization: string;
  availability: string;
  imageurl: string;
  location: string;
  rating: string;
  consultingtime: string;
}

export const DocterSchema = new mongoose.Schema({
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
export default mongoose.model<Docter__interface>("doctordetails", DocterSchema);
