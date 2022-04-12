import express, { Request, Response } from "express";
import { Shareholder } from "../models/Shareholder";
const router = express.Router();

router.get("/api/shareholder", async (req: Request, res: Response) => {
  try {
    const shareholders = await Shareholder.find({}).populate("companyId");

    console.log("get all  shareholder success");
    res.status(201).send(shareholders);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

export { router as getAllShareholder };
