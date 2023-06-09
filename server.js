const connection = require("./model/connection"),
    express = require("express"),
    cors = require("cors"),
    route = require("./router")

connection.getConnectionAsync()
    .then((db) => {

        const app = express()

        app.use(cors({
            origin: "*"
        }))
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))

        route(app, db)

        const PORT = process.env.PORT || 3333
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    }).catch((e) => {
        console.log(e)
    })