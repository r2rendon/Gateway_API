const amqp = require('amqplib/callback_api');

let app_channel = null;

const queue = 'client-search';

const publishToQueue = async (queueName, data) => {
    app_channel.sendToQueue(queueName, new Buffer(data));
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

module.exports.connect = connect;
module.exports.publishToQueue = publishToQueue;