const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, "secret", (err) => {
            if(err){
                res.sendStatus(403);
                next();
            }
        })
    } else{
        res.sendStatus(401);
    }
}

module.exports = verifyToken;