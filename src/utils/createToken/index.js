const jwt = require("jsonwebtoken");


const createToken = (id, nome, email, type) => {
    const token = {id, nome, email, type};
    const newToken =  jwt.sign(token, process.env.KEY_CRYPT || "@wilk2020#", {expiresIn: "7d" });
    return newToken;
};

module.exports = createToken;