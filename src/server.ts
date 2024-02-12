import express from "express";
import payload from "payload";
import cors from "cors";
import createMedia from "./utils/createMedia";
import multer from "multer";

require("dotenv").config();
const app = express();

// const upload = multer();

// app.post("/create-media", upload.single("file"), createMedia);

app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3001);
};

start();
