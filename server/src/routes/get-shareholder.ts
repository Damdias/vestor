import express, { Request, Response } from "express";
import { Shareholder } from "../models/Shareholder";
const router = express.Router();

router.get(
  "/api/shareholder/:companyId",
  async (req: Request, res: Response) => {
    const { companyId } = req.params;
    const shareholders = await Shareholder.find({ companyId: companyId });

    console.log("get all  shareholder success");
    res.status(201).send(shareholders);
  }
);

export { router as getShareholdersByCompany };
