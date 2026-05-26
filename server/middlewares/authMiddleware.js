
const jwt = require('jsonwebtoken');
module.exports = function authMiddleware(req, res, next) {
    try {
        const jwtToken = req.headers.authorization.split(' ')[1];
        const verifiedUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        req.body = verifiedUser;

        next();
    }
    catch (err) {
        res.send({ success: false, message: "Unathorized User" });
    }
}
