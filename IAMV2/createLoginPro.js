const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const iam = new AWS.IAM({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


const params = {
    // Password:'test@123',
    // PasswordResetRequired: true,
    UserName:'newuserupdated',
}


iam.deleteLoginProfile (params, function(err, data){ // createLoginProfile
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})