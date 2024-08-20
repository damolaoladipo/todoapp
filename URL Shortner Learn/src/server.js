"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const colors_1 = __importDefault(require("colors"));
//load the nev vars
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${process.env.NODE_ENV}`);
});
//handle unhandleRejection error
process.on('unhandleRejection', (err, promise) => {
    console.log(colors_1.default.bold.red(`Error: ${err.message}`));
    server.close(() => process.exit());
});
