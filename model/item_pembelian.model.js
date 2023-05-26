const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("item_pembelian", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_barang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_pembelian: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}))