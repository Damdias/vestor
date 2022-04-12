import express, { Request, Response } from "express";
import { json } from "body-parser";
import "express-async-errors";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";
import SwaggerUi from "swagger-ui-express";
import SwaggerJsdoc from "swagger-jsdoc";

import { errorHandler } from "vestor-common";

import { notFound } from "./routes/not-found";
import { createCompany } from "./routes/create-company";
import { createShareholder } from "./routes/create-shareholder";
import { updateShareholder } from "./routes/update-shareholder";
import { deleteShareholder } from "./routes/delete-shareholder";
import { getAllCompany } from "./routes/get-company";
import { getShareholdersByCompany } from "./routes/get-shareholder";
import { getAllShareholder } from "./routes/get-all-shareholders";
import { splitShares } from "./routes/split-shares";

import cors from "cors";

import cookieSession from "cookie-session";

const PORT = 5002;
const app = express();
app.use(cors());
app.set("trust proxy", 1);
app.use(
  cookieSession({
    signed: false,
    secure: false,
    secret: "damith",
  })
);

// app.use("/api-docs", SwaggerUi.serve);
// app.get("/api-docs", SwaggerUi.setup(SwaggerJsdoc));

// const accessLogStream = rfs.createStream("access.log", {
//   interval: "1d", // rotate daily
//   path: path.join(__dirname, "log"),
// });
app.use(morgan("combined"));
app.use(json());
// app.use(authMiddleware);
// app.use(currentUserHandler);
// app.use(getTicketById);

app.use(createCompany);

app.use(createShareholder);
app.use(updateShareholder);
app.use(deleteShareholder);
app.use(getAllShareholder);
app.use(getAllCompany);
app.use(getAllShareholder);
app.use(splitShares);

app.get("/api/heart-beat", (req, res) => {
  res.send("working");
});

app.use(notFound);

app.use(errorHandler);

const init = async () => {
  mongoose.connect("mongodb://localhost:27017/vestors", {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connect to db");
    }
  });
};
init();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
