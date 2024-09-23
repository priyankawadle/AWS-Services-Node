const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const params={
    Message: {
        Body: {
            Html:{
                Charset:"UTF-8",
                Data:"Thanks for buying the course"
            },
            Text: {
                Charset:"UTF-8",
                Data:"AWS Course with JavaScript & NodeJS"
            }
        },

        Subject: {
            Charset:"UTF-8",
            Data:"AWS Course with JavaScript & NodeJS"
        }
    },
    Source: "priyanka98wadle@gmail.com",
    Destination: {"ToAddresses":["priyanka98wadle@gmail.com"]},
}

ses.sendEmail(params, function(err, data) {
    if(err) {
        console.log('unable to send email', err);
        
    }else {
        console.log('email is sent', data);
        
    }
});