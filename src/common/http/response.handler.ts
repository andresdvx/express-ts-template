import { Response } from "express";

interface ResponseData {
  status: number;
  message?: string;
  data?: any;
}

export function ResponseHandler(
  res: Response,
  { status, message = "", data = null }: ResponseData
) {
  return res.status(status).json({ status, error: false, message, data });
}
