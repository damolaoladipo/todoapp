import express from "express";
import { config } from "dotenv";
import colors from "colors";

//load the nev vars
config();


const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.NODE_ENV}`);
});


//handle unhandleRejection error
process.on('unhandleRejection', (err: any, promise) => {

    console.log(colors.bold.red(`Error: ${err.message}`));
    server.close(() => process.exit())
})
