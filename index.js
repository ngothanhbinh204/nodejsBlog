const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 4;
    var c = a + b;
    return res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on  at http://localhost:${port}`)
})