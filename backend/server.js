import express from "express";
import cors from "cors";
import "dotenv/config";

import connectCloudinary from "./src/config/cloudinary.js";
import connectDB from "./src/config/mongodb.js";

const app = express();
const port = process.env.PORT || 5000;

// connect services
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("SERVER IS LISTENING");
});

// start server
app.listen(port, () => {
  console.log("Server started at port:", port);
});
