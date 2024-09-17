import { Request } from "express";

// Define the interface for the HTTP request body
interface testApiHttpBody {
    id: number;
    name: string;
    email: string;
}

// Create a class that implements the interface
export default class testApi implements testApiHttpBody {
    id: number;
    name: string;
    email: string;

    // The constructor takes the Express request object and maps the body to the class properties
    constructor(req: Request) {
        this.id = req.body.id;
        this.name = req.body.name;
        this.email = req.body.email;
    }

    // You can add any other methods to manipulate or work with the data here
    printDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }

}
