import AWS from 'aws-sdk';
import fs from 'fs';

// Set the region and credentials for AWS SDK
AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA2NPHSNPINB3UOOFE',
    secretAccessKey: '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'
});

// Create an S3 service object
const s3 = new AWS.S3();

// Define the bucket name and file name
const bucketName = 'anubhavchatpdf';
const fileName = 'hello.txt';

// Define the text to be uploaded
const text = 'Hello world';

// Create a buffer from the text
const buffer = Buffer.from(text, 'utf-8');

// Set the parameters for the S3 upload
const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: buffer
};

// Upload the file to S3
s3.upload(params, function(err: Error, data: AWS.S3.ManagedUpload.SendData) {
    if (err) {
        console.log('Error uploading file:', err);
    } else {
        console.log('File uploaded successfully. Location:', data.Location);
    }
});