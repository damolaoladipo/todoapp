// application configuration

import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import { ENVType } from "../utils/enums.utils";
import ENV from "../utils/env.utils";
import ErrorResponse from "../utils/error.utils";
import errorHandler from "../middleware/error.mdw";

//load my env vars
config();

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  let environment = ENVType.DEVELOPMENT;

  if (ENV.isProduction()) {
    environment = ENVType.PRODUCTION;
  } else if (ENV.isStaging()) {
    environment = ENVType.STAGING;
  } else if (ENV.isDev()) {
    environment = ENVType.DEVELOPMENT;
  }

  return next(
    new ErrorResponse("Error", 400, ["Cannot get api health"], {
      name: "URL Shortner",
    })
  );

  // res.status(203).json({
  //   error: false,
  //   errors: [],
  //   data: { name: "ULR Shortner" },
  //   message: "url-shortner api v1.0.0",
  //   status: 200,
  // });
});

app.use(errorHandler);

//functions are middlewares. They recognised by express as an intercerpter.

export default app;
