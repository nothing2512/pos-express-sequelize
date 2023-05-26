const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("pembayaran", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pembelian: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metode: {
        type: DataTypes.INTEGER, // 1 : transfer VA BCA, 2 : transfer VA BRI, 3 : tunai, 4: indomaret
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER, // 0 : belum dibayar, 1 : sudah dibayar
        allowNull: false
    },
    kodeVA: {
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