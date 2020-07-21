const avatarFile = (data) => {
    const file = {
        user_id: data.userId,
        type: data.type,
        name: data.name,
        data: data.data,
    };

    return file;
};

module.exports = avatarFile;