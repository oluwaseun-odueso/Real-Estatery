import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection/database';

export class Transaction extends Model {}

Transaction.init({
    // Model attributes are defined here
    property_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    buyer_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transaction_date: {
      type: DataTypes.DATE
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Transaction' 
  });