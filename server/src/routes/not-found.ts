import express, { Request, Response } from "express";

import { NotFoundError } from "vestor-common";

const router = express.Router();
router.all("*", (req: Request, res: Response) => {
  throw new NotFoundError("");
});

export { router as notFound };
