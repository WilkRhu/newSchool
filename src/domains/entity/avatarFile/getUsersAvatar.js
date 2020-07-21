const connect = require("../../../config/connect");

const getUsersAvatar = async (array) => {
    const newFiles = [];
    for (let i = 0; i < array.length; i++) {
        const files = await connect("file").select("*").where("user_id", array[i].id);
        newFiles.push(files);
    }
    return newFiles;
};

module.exports = getUsersAvatar;