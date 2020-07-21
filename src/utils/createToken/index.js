const jwt = require("jsonwebtoken");


const createToken = (nome, email) => {
    const token = {nome, email};
    return jwt.sign(token, process.env.KEY_CRYPT, {expiresIn: "1800000ms" });
};

module.exports = createToken;