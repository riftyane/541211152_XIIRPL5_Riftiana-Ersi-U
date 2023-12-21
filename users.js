const User = require('../models/user')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status:false,
                    massage: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucsess: false})
        }
    }, 
    store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                massage: "Data berhasil ditambahkan"
            })
        } catch (error){

        }
        user.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "Data berhasil ditambahkan"
        })
    },
    update:  (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "Data berhasil diubah"
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "Data berhasil dihapus"
        })
    }
}