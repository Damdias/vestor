import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Company } from "../models/Company";
import { RequestValidateHandler } from "vestor-common";
const router = express.Router();
router.post(
  "/api/company",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("stocks").isArray().withMessage("Stocks is required"),
  ],
  RequestValidateHandler,
  async (req: Request, res: Response) => {
    const { name, stocks } = req.body;
    const company = new Company({ name, stocks, userId: 1 });
    try {
      await company.save();
    } catch (e) {
      console.error("e", e);
      throw e;
    }
    console.log("create company success");
    res.status(201).send(company);
  }
);

export { router as createCompany };
