const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("pembeli", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATETIME,
        allowNull: false
    }
}))