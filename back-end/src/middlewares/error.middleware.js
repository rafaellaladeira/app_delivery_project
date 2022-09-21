const errors = {
    ValidationError: 400,
};


const errorMiddleware = (error, _req, res, _next) => {
    const { message, name } = error;
    const status = errors[name];
    // if (!status) {
    //     console.log(error.status);
    //     return res.status(500).json({ message: 'Internal server error' });
    // }
    // return res.status(status).json({ message });
    if (!status) return res.sendStatus(500);
    return res.status(status).json({ message });
};

module.exports = errorMiddleware;