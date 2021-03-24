const amqp = require('amqplib/callback_api');

let app_channel = null;

const queue = 'client-search';

const publishToQueue = async (queueName, data) => {
    app_channel.sendToQueue(queueName, Buffer.from(data));
};

const consumeQueueData = async queueName => {
    let message = null;

    const consumedData = consume(app_channel, queueName).then(() => {
        console.log("\n\nDisplaying consumed data");
        console.log(consumedData);
    });

    
    return "";
};

const connect = url => {
    amqp.connect(url, (error, conn) => {
        if(error) throw error;
        console.log('RabbitMQ connected');

        conn.createChannel((err, channel) => {
            app_channel = channel;
        
            channel.assertQueue(queue, {
                durable: true
            })
            
        });
    });
}

function consume(channel, queueName) {
    return new Promise((resolve, reject) => {
        channel.consume(queueName, async msg => {
            let msgBody = msg.content.toString();
            // let data = JSON.parse(msgBody);

            console.log("Consumed data");

        }); 
    });
}

module.exports.connect = connect;
module.exports.publishToQueue = publishToQueue;
module.exports.consumeQueueData = consumeQueueData;