const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("pembelian", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pembeli: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER, // 1: keranjang, 2: CO - belum dibayar, 3: sudah dibayar (selesai)
        allowNull: false
    },
    waktu: {
        type: DataTypes.DATE,
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