const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const rds = new AWS.RDS({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


const params = {
    DBName:'rdsexamples',
    DBInstanceIdentifier:'rdsexamples',
    AllocatedStorage:5,
    DBInstanceClass:'db.t2.micro',
    Engine:'MySQL',
    MasterUsername:'admin',
    MasterUserPassword:'password',
    Port:3306,
    EngineVersion:'8.0.27',
    PubliclyAccessible:true,
    StorageType:'gp2'
}

rds.createDBInstance(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})