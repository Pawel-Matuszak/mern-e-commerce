const express = require('express')
const app = express()
const mongoose = require("mongoose")

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))