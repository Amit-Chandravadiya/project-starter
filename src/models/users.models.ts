import { DataTypes } from "sequelize";
import { sequelize } from "../db/DB";

const userModel = sequelize.define('Users',{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_no:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
},{
    tableName: "user_master"
});

export {
    userModel
}