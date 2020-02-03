const draw = require('./draw')
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {

    let results = []
    const width = req.query.width || 20
    const height = req.query.height || 20
    const padding = req.query.padding || 4
    let errorText = null

    try {
         results = draw(width, height, padding)
    } catch (error) {
        errorText = error.message
    }

    res.render('index.html', {
        results: JSON.stringify(results),
        width,
        height,
        padding,
        errorText
    })
})

const port = 8080

console.log(`Server started at localhost:${port}`)

app.listen(port)
