import { Request, Response, NextFunction } from "express";
import ENV from "../utils/env.utils";
import ErrorResponse from "../utils/error.utils";
import logger from "../utils/logger.utils";

//write commnets for each line or function
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message: string = "";
  let errors: Array<any> = [];
  let error = { ...err };


  // process errors array
  if (err.errors) {
    errors = Object.values(err.errors).map((item: any) => {
      let result: any;
      if (item.properties) {
        result = item.properties.message;
      } else {
        result = item;
        return result;
      }
    });

    //log error to console
    if (ENV.isDev() || ENV.isStaging()) {
      logger.log({data: err, label: "ERR"})
      logger.log({data: "Austin", type : "warning"})
    }

    //Mongoose badobjectID
    if (err.name === "CastError") {
      message = "Resource not found -id cannot be casted";
      error = new ErrorResponse(message, 500, errors);
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
      message = "Duplicate field value entered for the resource";
      error = new ErrorResponse(message, 500, errors);
    }

    // Mongoose validate error
    if (err.code === "ValidationError") {
      message = "Validation error occurred - check the fields you entered";
      error = new ErrorResponse(message, 500, errors);
    }

    // Mongoose reference error
    if (err.code === "referenceError") {
      message = "Something is not right, check check the fields you entered";
      error = new ErrorResponse(message, 500, errors);
    }

    res.status(error.statusCode || 500).json({
        error: true,
          errors: error.errors ? error.errors :[],
          data: error.data ? error.data : {},
          message: error.message ? error.message : "Internal Server Error",
          status: error.status ? error.status : 500
    })

    // res.status(500).json({
    //   error: true,
    //   errors: [],
    //   data: {},
    //   message: "Internal Server Error",
    //   status: 500,
    // });
  }
};

export default errorHandler;
