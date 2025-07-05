const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    console.log(err.message);

    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    let message = '';
    if (statusCode !== StatusCodes.INTERNAL_SERVER_ERROR) {
        message = err.message;
    } else {
        message = 'Internal Server Error';
    }

    res.status(statusCode).json({ message });
};

module.exports = errorHandler;