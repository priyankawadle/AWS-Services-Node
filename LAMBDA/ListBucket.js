const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

exports.myfunc = (event) => {
    s3.listBuckets(function(err, data) {
        if(err) {
            console.log(err);
            
        }else {
            console.log(data['Buckets']);
            
        }
    })
}