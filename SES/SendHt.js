const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})


const html_contents = "<html>" +
        "<h1 style='text-align:center'>AWS with JavaScript and NodeJS</h1>" +
        "<p style='color:red'>Welcome to the course and thanks for the buying</p>"

+ "</html>";


const params = {
    Source: "priyanka98wadle@gmail.com",
    Destination: {"ToAddresses":["priyanka98wadle@gmail.com"]},
    Message: {
        Body: {
            Html: {
                Charset:'UTF-8',
                Data:html_contents
            }
        },
        Subject: {
            Charset:'UTF-8',
            Data:"AWS Course with JavaScript & NodeJs"
        }
    },

};

ses.sendEmail(params, function(err, data) {
    if(err) {
        console.log('unable to send email', err);
        
    }else {
        console.log('email is send', data);
        
    }
});
