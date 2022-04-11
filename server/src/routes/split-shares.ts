import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Company } from "../models/Company";
import { Shareholder } from "../models/Shareholder";
import { NotFoundError, RequestValidateHandler } from "vestor-common";
const router = express.Router();
router.post(
  "/api/company/split",
  [
    body("companyId").not().isEmpty().withMessage("Company Id is required"),
    body("shares").isInt().withMessage("Shares is required"),
  ],
  RequestValidateHandler,
  async (req: Request, res: Response) => {
    const { companyId, shares } = req.body;
    const company = await Company.findById(companyId);
    const shareholders = await Shareholder.find({ companyId: companyId });

    if (!company) {
      throw new NotFoundError("");
    }

    try {
      await Shareholder.updateMany(
        { companyId: company },
        { $inc: { stocks: shares } }
      );
      company.stocks[0].stock =
        company.stocks[0].stock + shareholders.length * shares;
      await company.save();
    } catch (e) {
      console.error("e", e);
      throw e;
    }
    console.log("share split is  success");
    res.status(201).send(company);
  }
);

export { router as splitShares };
