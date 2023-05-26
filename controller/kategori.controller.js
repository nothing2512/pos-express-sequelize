exports.getAll = async (db, req, res) => {
    const daftarKategori = await db.kategori.findAll()
    res.json({
        status: true,
        message: "",
        data: daftarKategori
    })
}

exports.detail = async (db, req, res) => {
    const kategori = await db.kategori.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        status: true,
        message: "",
        data: kategori
    })
}

exports.create = async (db, req, res) => {
    const payload = {
        nama: req.body.nama,
        created_at: new Date(),
        updated_at: new Date()
    }

    const kategori = await db.kategori.create(payload)

    res.json({
        status: true,
        message: "",
        data: kategori
    })
}

exports.update = async (db, req, res) => {
    const payload = {
        nama: req.body.nama,
        updated_at: new Date()
    }

    await db.kategori.update(payload, {
        where: {
            id: req.params.id
        }
    })

    res.json({
        status: true,
        message: "berhasil update",
        data: null
    })
}

exports.delete = async (db, req, res) => {
    await db.kategori.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        status: true,
        message: "berhasil hapus",
        data: null
    })
}