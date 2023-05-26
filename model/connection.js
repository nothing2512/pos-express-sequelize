const { Sequelize } = require("sequelize")
const USERNAME = "postgres",
    PASSWORD = "",
    DBNAME = "pos",
    DRIVER = "postgres",
    DBHOST = "localhost"

exports.getConnectionAsync = async () => {
    const connection = new Sequelize(DBNAME, USERNAME, PASSWORD, {
        host: DBHOST,
        dialect: DRIVER,
        logging: false
    })

    await connection.authenticate()
    console.log("Database Connected")

    const db = {
        barang: require("./barang.model")(connection),
        item_pembelian: require("./item_pembelian.model")(connection),
        kategori: require("./kategori.model")(connection),
        pembayaran: require("./pembayaran.model")(connection),
        pembeli: require("./pembeli.model")(connection),
        pembelian: require("./pembelian.model")(connection)
    }

     await connection.sync()
    console.log("Database Migrated")

    return db
}

/**
 * Jika tidak menggunakan async-await (asynchronous)
 */
// exports.getConnection = () => new Promise((resolve, reject) => {
//     const connection = new Sequelize(DBNAME, USERNAME, PASSWORD, {
//         host: DBHOST,
//         dialect: DRIVER,
//         logging: false
//     })
//
//     connection.authenticate() // masuk ke database
//         .then(() => {
//             console.log("DB: Connected")
//
//             const db = {
//                 barang: require("./barang.model")(connection),
//                 item_pembelian: require("./item_pembelian.model")(connection),
//                 kategori: require("./kategori.model")(connection),
//                 pembayaran: require("./pembayaran.model")(connection),
//                 pembeli: require("./pembeli.model")(connection),
//                 pembelian: require("./pembelian.model")(connection)
//             }
//
//             connection.sync() // migrasi database
//                 .then(() => {
//                     console.log("Migration Success")
//                     resolve(db)
//                 }).catch((e) => {
//                 reject(e)
//             })
//
//         }).catch((e) => {
//         reject(e)
//     })
// })