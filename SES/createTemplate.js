const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const params={
    Template: {
        "TemplateName":"javascriptTemp",
        "SubjectPart":"javascript node js",
        "TextPart":"Welcome to AWS SES",
        "HtmlPart":"Welcome to AWS SES"
    }
}

ses.createTemplate(params,(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})