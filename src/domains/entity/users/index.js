const userSchema = (data) => {
    const user = {
        name: data.name,
        login: data.login,
        email: data.email,
        password: data.password,
        type: data.type,
        file: data.file

    };

    return user;
};

module.exports = userSchema;