module.exports = {
    handleException: (res, err) => {
        if (err.message) {
            res.send({
                error: err.message
            });
        } else {
            console.error(err);
            res.send({
                error: "Something went wrong, look at console"
            });
        }
    },
    secret: "shhhh"
}