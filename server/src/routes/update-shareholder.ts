import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Shareholder } from "../models/Shareholder";
import { NotFoundError, RequestValidateHandler } from "vestor-common";
const router = express.Router();

router.put(
  "/api/shareholder",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("stocks").not().isEmpty().withMessage("Stocks is required"),
    body("companyId").not().isEmpty().withMessage("Company Id is Required"),
    body("id").not().isEmpty().withMessage("Id is required"),
  ],
  RequestValidateHandler,
  async (req: Request, res: Response) => {
    const { name, stocks, id, companyId } = req.body;
    const shareholder = await Shareholder.findById(id);
    try {
      if (!shareholder) {
        throw new NotFoundError("");
      }
      shareholder.name = name;
      shareholder.stocks = stocks;
      shareholder.companyId = companyId;
      await shareholder.save();
    } catch (e) {
      console.error("e", e);
      throw e;
    }
    console.log("update shareholder success");
    res.status(201).send(shareholder);
  }
);

export { router as updateShareholder };
