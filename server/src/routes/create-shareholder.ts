import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Shareholder } from "../models/Shareholder";
import { RequestValidateHandler } from "vestor-common";
const router = express.Router();

router.post(
  "/api/shareholder",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("stocks").not().isEmpty().withMessage("Stocks is required"),
    body("companyId").not().isEmpty().withMessage("Company Id is Required"),
  ],
  RequestValidateHandler,
  async (req: Request, res: Response) => {
    const { name, stocks, companyId } = req.body;
    const shareholder = new Shareholder({
      name,
      stocks,
      companyId: companyId,
      userId: 1,
    });
    try {
      await shareholder.save();
    } catch (e) {
      console.error("e", e);
      throw e;
    }
    console.log("create shareholder success");
    res.status(201).send(shareholder);
  }
);

export { router as createShareholder };
