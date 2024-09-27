// Importing enviorment config
import dotenv from "dotenv";
dotenv.config();

// Initiliazing database from DB.ts
// Importing app instance from app.ts
import { app } from "./app";
import {connectToDatabase} from "./db/DB";

// Testing connection with the database
connectToDatabase()
.then(() => {

    // Setting port on which application should run
    const port: string | number = process.env.PORT || 3000;

    // start the server on the basis of the port provided
    app.listen(port, () => {
        console.log(`Server started and listening on Port:${port}`);
    });
});
