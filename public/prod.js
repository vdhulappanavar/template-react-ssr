const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<div>Hello World!</div>')
})