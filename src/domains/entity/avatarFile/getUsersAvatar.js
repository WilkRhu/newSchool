const connect = require("../../../config/connect");

const getUsersAvatar = async (array) => {
    const newFiles = [];
    for (let i = 0; i < array.length; i++) {
        const files = await  connect("file").select("*").where("user_id", array[i].id);
        if(files.length !== 0) {
            newFiles.push(files);
        }
    }
    return newFiles[0];
   
};

module.exports = getUsersAvatar;