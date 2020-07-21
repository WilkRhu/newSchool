const connect = require("../../config/connect");
const avatarFile = require("../../domains/entity/avatarFile");


const avatarFiles = async (file, userId) => {
    try {
        const type = file.mimetype;
        const name = file.originalname;
        const data = file.buffer;
        const image = {userId, type, name, data};
        await connect("file").insert(avatarFile(image));
        return name;
    } catch (error) {
        return error;
    }
};

module.exports = avatarFiles;