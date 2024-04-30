const express = require('express')
const app = express()
const port = 5000
const HOST = '127.0.0.1'


app.get('/', (req, res) => {
    console.log('Hello BNT SOFT 5');
    res.send('Hello BNT SOFT 5')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
