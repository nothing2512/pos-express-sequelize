const { DataTypes } = require("sequelize")

module.exports = (sequelize => sequelize.define("barang", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_kategori: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
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