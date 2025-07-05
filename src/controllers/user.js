const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { v4: uuidv4 } = require('uuid');
const s3Client = require('../config/s3');
const { StatusCodes } = require("http-status-codes");
const AppError = require('../utils/appError');
require('dotenv').config();

async function upload (req, res) {
    if (!req.body) {
        throw new AppError('Invalid file data', StatusCodes.BAD_REQUEST);
    }

    const { filename, contentType } = req.body;

    if (!filename || !contentType) {
        throw new AppError('Missing file data', StatusCodes.BAD_REQUEST);
    }

    const uniqueFilename = `${uuidv4()}-${filename}`;

    const command = new PutObjectCommand({
        Bucket: process.env.UPLOAD_BUCKET_NAME,
        Key: uniqueFilename,
        ContentType: contentType,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 60*5 }); // URL valid for 5 minutes

    return res.status(StatusCodes.OK).json({ url });
}

async function deleteVideo (req, res) {
    return ;
}

module.exports = { upload, deleteVideo };