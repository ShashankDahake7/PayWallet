const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "You are not authorized!"
        });
    }
    
    const token = header.split(" ")[1];
    try {
        const decode = jwt.verify(token, JWT_SECRET);
        if (decode.userId) {
            req.userId = decode.userId;
            next();
        } else {
            return res.status(403).json({ message: "You are not authorized!" });
        }
    } catch (error) {
        return res.status(403).json({
            message: "You are not authorized!"
        });
    }
}

module.exports = {
    authMiddleware
};