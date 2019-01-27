module.exports = {
    handleException: (res, err) => {
        res.status(400);
        if (err.message) {
            res.send({
                error: err.message,
                details: err
            });
        } else {
            res.send({
                error: "Something went wrong, look at console"
            });
        }
    },
    secret: "shhhh"
}