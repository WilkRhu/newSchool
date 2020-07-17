const bcrypt = require("bcrypt");

const criptPassword = (password) => {
    const saltRound = 10;
    const pass = bcrypt.hashSync(password, saltRound);
    return pass;
};

module.exports = criptPassword;