let users = [
    {id: 1, nama:"Riftiana", email: "riftianaa@gmail.com"},
    {id: 2, nama:"Ersi", email: "ersiaja@gmail.com"},
]

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
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
    }, 
    store: (req, res) => {
        users.push(req.body)
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