import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    severity: {
      type: String,
      enum: ["low", "high", "critical"],
      default: "low"
    },
    status: {
      type: String,
      enum: ["open", "resolved"],
      default: "open"
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Incident =
  mongoose.models.Incident || mongoose.model("Incident", incidentSchema);

export default Incident;
