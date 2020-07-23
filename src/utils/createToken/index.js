const jwt = require("jsonwebtoken");


const createToken = (nome, email) => {
    const token = {nome, email};
    const newToken =  jwt.sign(token, process.env.KEY_CRYPT || "@wilk2020#", {expiresIn: "7d" });
    return newToken;
};

module.exports = createToken;