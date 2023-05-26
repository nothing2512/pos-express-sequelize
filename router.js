const kategori = require("./controller/kategori.controller")

async function route(db, req, res, controller) {
    try {
        await controller(db, req, res)
    } catch (e) {
        res.json({
            status: false,
            message: e,
            data: null
        })
    }
}

function get(app, db, endpoint, controller) {
    app.get(endpoint, async (req, res) => {
        await route(db, req, res, controller)
    })
}

function post(app, db, endpoint, controller) {
    app.get(endpoint, async (req, res) => {
        await route(db, req, res, controller)
    })
}

function put(app, db, endpoint, controller) {
    app.put(endpoint, async (req, res) => {
        await route(db, req, res, controller)
    })
}

function destroy(app, db, endpoint, controller) {
    app.delete(endpoint, async (req, res) => {
        await route(db, req, res, controller)
    })
}

module.exports = (app, db) => {
    get(app, db, "/kategori", kategori.getAll)
    get(app, db, "/kategori/:id", kategori.detail)
    post(app, db, "/kategori", kategori.create)
    put(app, db, "/kategori/:id", kategori.update)
    destroy(app, db, "/kategori/:id", kategori.delete)
}