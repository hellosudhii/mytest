import * as mongoose from "mongoose";

export interface Docter__interface extends mongoose.Document {
  docter_id: string;
  name: string;
}

export const DocterSchema = new mongoose.Schema({
  docterid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
export default mongoose.model<Docter__interface>("userdetails", DocterSchema);
