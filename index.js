const express = require('express')
const app = express()

// Load environment variables
require('dotenv').config()

// Global variables
const port = process.env.API_PORT

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port || 3000, () => {
    console.log(`Application listening on port: ${port}`)
})