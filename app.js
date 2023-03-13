const express = require('express');
const twilio = require('twilio')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

function sendSMS() {
    const client = new twilio(process.env.TWILLO_SID, process.env.TWILLO_AUTH)
    return client.messages
        .create({ body: 'hello this is test message from admin', from: process.env.SENDER_NUMBER, to: process.env.PHONE_NUMBER })
        .then(messages => {
            console.log(messages, "Message send");
        })
        .catch(err => {
            console.log(err, "Message not send");
        })

}

sendSMS()

app.listen(7000, () => {
    console.log("server is running on port 7000");
})