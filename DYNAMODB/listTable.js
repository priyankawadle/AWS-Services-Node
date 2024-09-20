const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

AWS.config.update({
    region: 'eu-north-1', 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamodb = new AWS.DynamoDB();


dynamodb.listTables ( function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
