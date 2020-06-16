const AWS = require('aws-sdk');

const ID = "YOUR_ID";
const SECRET = 'YOUR_SECRET';

// The name of the bucket that you have created
const BUCKET_NAME = 'testckeditorupload';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const UploadToS3 = async (file) => {
    console.log(file)

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: file.md5, 
        Body: file.data,
        ContentType: file.mimetype,
        ACL:'public-read'
    };

    let s3Response = await s3.upload(params).promise()

    return s3Response.Location
}

module.exports = UploadToS3