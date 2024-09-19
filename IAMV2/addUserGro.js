const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const iam = new AWS.IAM({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


const params = {
    GroupName:'newGroup',
    UserName:'newuserupdated'
}


iam.addUserToGroup (params, function(err, data){
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})