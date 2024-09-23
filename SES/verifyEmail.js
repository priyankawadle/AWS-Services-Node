const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const params={
    EmailAddress:"priyanka98wadle@gmail.com"
}

ses.verifyEmailAddress(params,(err,data)=>{
if(err){
    console.log(err);
}else{
    console.log(data)
}
})