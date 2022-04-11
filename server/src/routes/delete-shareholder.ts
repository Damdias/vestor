import express, { Request, Response } from "express";
import {} from "express-validator";
import { Shareholder } from "../models/Shareholder";
import { NotFoundError } from "vestor-common";
const router = express.Router();

router.delete("/api/shareholder/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const shareholder = await Shareholder.findById(id);

  if (!shareholder) {
    throw new NotFoundError("");
  }
  await shareholder.deleteOne();

  console.log("delete shareholder success");
  res.status(201).send(shareholder);
});

export { router as deleteShareholder };
