import { PrismaClient } from "@prisma/client";

// Creating instance of prisma to read and write in Database
const prisma = new PrismaClient();

async function connectToDatabase() {
    try {
      await prisma.$connect();
      console.log("Successfully connected to the database");
    } catch (error) {
      console.error("Failed to connect to the database", error);
    }
  }
// Exporting DB instance
export default connectToDatabase;
