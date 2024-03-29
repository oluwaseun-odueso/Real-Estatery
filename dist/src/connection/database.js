"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv").config();
const database = process.env.PROD_DATABASE;
const user = process.env.PROD_USERNAME;
const password = process.env.PROD_PASSWORD;
const host = process.env.PROD_HOST;
if (!database || !user || !password) {
    throw new Error("Missing required environment variables for database connection");
}
const sequelize = new sequelize_1.Sequelize(database, user, password, {
    host: host,
    dialect: "postgres",
});
sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((error) => console.log("Unable to connect to the database:", error));
exports.default = sequelize;
