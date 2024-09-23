const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

exports.handler = (event) => {
    const fileContent = fs.readFileSync('aws.png');

    const params = {
        Bucket:'lambda12',
        ACL:'public-read',
        Key:'awsimg.png',
        Body:fileContent
    };

    s3.putObject(params, function(err, data) {
        if(err) {
            console.log(err);
            
        }else {
            console.log('Image uploaded', data);
            
        }
    });
}
