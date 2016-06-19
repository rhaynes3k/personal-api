const mainCtrl = require('./mainCtrl');

module.exports = {
    addHeaders: function(req, res, next) {
        res.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    },
    generateId(req, res, next) {
        req.body.id = mainCtrl.Romulus.skills.length + 1;
        next();
    },
    verifyUser(req, res, next) {
        if (req.params.username === "bob" && req.params.pin === "b") {
            // alert("Hello!");
            next();
        }else {
            return res.status(401).json("WRONG!!...TRY AGAIN...");
        }

    }
};
