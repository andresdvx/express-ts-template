import { Response } from "express";
import { ResponseHandler } from "../response.handler";
import { ErrorHandler } from "../error.handler";

export function HandleResponse() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const res: Response = args[1]; 
      try {
        const result = await originalMethod.apply(this, args);
        ResponseHandler(res, { status: 200, message: "success", data: result });
      } catch (error) {
        ErrorHandler(error, res);
      }
    };

    return descriptor;
  };
}