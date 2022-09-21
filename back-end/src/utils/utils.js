const InvalidInfo = (message) => {
    const err = new Error(message);
    err.name = 'ValidationError';
    throw err;
}

module.exports =  InvalidInfo;