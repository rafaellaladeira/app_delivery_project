const InvalidInfo = (message) => {
    const err = new Error(message);
    err.name = 'ValidationError';
    throw err;
};

const NotFound = (message) => {
    const err = new Error(message);
    err.name = 'NotFound';
    throw err;
};

module.exports =  { 
    InvalidInfo,
    NotFound,
};