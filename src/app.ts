import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import { JSON_SIZE_LIMIT, URL_ENCODED_SIZE_LIMIT } from "./constants";
import 'reflect-metadata';

// creating express application
const app: Application = express();

// Allowed origins to talk with the application
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}));

// Setting size limit to the JSON data that can be accepted by request
app.use(express.json({
    limit: JSON_SIZE_LIMIT
}));

// Parsing the URL endoced data
app.use(express.urlencoded({
    extended: true,
    limit: URL_ENCODED_SIZE_LIMIT
}));

// All the static file will be served from the public folder as per the request
app.use(express.static("public"));

/*
    Following will allow the server to read and write
    cookie stored client browser from server side.
 */
app.use(cookieParser());

// Importing Root router that will be used for implementation of all the routers in the app
import rootRouter from "./routes/root.routes";

// Routes declaration
app.use("/api/v1/",rootRouter);

export {app};
