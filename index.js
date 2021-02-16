const express = require('express')
const app = express()

// Load environment variables
require('dotenv').config()

// Global variables
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application listening on port: ${port}`)
})