const cryptPassword = require("../../../utils/cryptPassword");

const userSchema = (data) => {
    const user = {
        name: data.name,
        login: data.login,
        email: data.email,
        password: cryptPassword(data.password),
        type: data.type,
    };

    return user;
};

module.exports = userSchema;