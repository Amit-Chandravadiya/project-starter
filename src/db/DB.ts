import { Sequelize } from "sequelize";

// Creating instance of prisma to read and write in Database
const sequelize = new Sequelize(process.env.DATABASE_DB, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql"
});

async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      // console.error("Failed to connect to the database", error);
      throw new Error("Failed to connect to the database" + error);
    }
  }
// Exporting DB instance
export { connectToDatabase, sequelize };
