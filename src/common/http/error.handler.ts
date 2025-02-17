import { Response } from "express";
import { HttpErrors } from "./errors/httpErrors";

export function ErrorHandler(error: any, res: Response) {
  if (error instanceof HttpErrors) return res.status(error.status).json(error);

  return res.status(500).json({status: 500, error: true, message: error.message || "Internal Server Error"});
}
