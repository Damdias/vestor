import express, { Request, Response } from "express";
import { Company } from "../models/Company";
const router = express.Router();

router.get("/api/company", async (req: Request, res: Response) => {
  const companies = await Company.find({});
  res.status(201).send(companies);
});

export { router as getAllCompany };
