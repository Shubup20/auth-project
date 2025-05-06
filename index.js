import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

// Initializes your Express application.
const app = express();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

//start server
app.listen(process.env.PORT, () => {
  console.log("listening....");
});
