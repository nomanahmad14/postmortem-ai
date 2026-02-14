import mongoose from "mongoose";

const evidenceSchema = new mongoose.Schema(
  {
    incidentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incident",
      required: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    publicId: {
      type: String,
      required: true
    },
    fileType: {
      type: String,
      enum: ["image", "pdf", "log"],
      required: true
    }
  },
  { timestamps: true }
);

const Evidence =
  mongoose.models.Evidence || mongoose.model("Evidence", evidenceSchema);

export default Evidence;
