import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js"
// all the details regarding our books what we gonna setup
const book = sequelize.define('Book', {
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default book;