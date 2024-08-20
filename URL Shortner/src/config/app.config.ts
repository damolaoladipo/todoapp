import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import { ENVType } from "../utils/enums.utils";
import ENV from "../utils/env.utils";

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

  res.status(200).json({
    error: false,
    errors: [],
    data: { name: "ULR Shortner" },
    message: "url-shortner api v1.0.0",
    status: 200,
  });
});

export default app;
