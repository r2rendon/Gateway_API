const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// Load environment variables
require('dotenv').config();

// App config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Global variables
const port = process.env.PORT;

// Services addition
const mqService = require('./services/MQService')

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.post('/testMsg', async (req, res) => {
    const {queueName, payload} = req.body;

    await mqService.publishToQueue(queueName, payload);

    const data = {
        "message-sent": true
    };

    res.status(200).send(data);

});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application listening on port: ${port}`);
    mqService.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
})