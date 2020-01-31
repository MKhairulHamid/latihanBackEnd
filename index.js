const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 4000

const app = express()
var arrProducts =[
    {
        nama : 'Popok Hokage',
        Deskripsi : 'Hokage asik',
        harga: 50000
    },
    {
        nama : 'Popok Naruto',
        Deskripsi : 'Naruto oke',
        harga: 100000
    }
]

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.status(202).send('<h1> Selamat Datang di API Latihan </h1>')
})

app.get('/products', (req,res) => {
    res.status(200).send(arrProducts)
})

app.listen(PORT, ()=> console.log(`API berhasil aktif di PORT ${PORT}`))

