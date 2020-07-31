const jwt = require("jsonwebtoken");


const createToken = (id, name, email, type) => {
    const token = {id, name, email, type};
    const newToken =  jwt.sign(token, process.env.KEY_CRYPT || "@wilk2020#", {expiresIn: "7d" });
    return newToken;
};

module.exports = createToken;