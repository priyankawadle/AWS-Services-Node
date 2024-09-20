const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const iam = new AWS.IAM({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


const policy_document= {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",//want to give access for s3 bucket
            "Resource": "arn:aws:s3:::parwiz-forogh-12/*"// s3 bucket arn copied from aws console
        }
    ]
}

const params={
    PolicyDocument:JSON.stringify(policy_document),
    PolicyName:"javascriptPolicy",
    Description:"first policy"
}

iam.createPolicy(params, function(err, data){
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})