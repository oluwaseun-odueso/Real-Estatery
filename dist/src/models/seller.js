"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connection/database"));
class Seller extends sequelize_1.Model {
}
exports.Seller = Seller;
Seller.init({
    // Model attributes are defined here
    address_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image_key: {
        type: sequelize_1.DataTypes.STRING
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING
    },
    hashed_password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize: database_1.default,
    modelName: 'Seller'
});
