const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("kategori", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
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