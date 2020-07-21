const connect = require("../../../config/connect");

const getAvatarUserId = async (userId) => {
    const file = await connect("file").select("*").where("user_id", userId);
    return file[0];
};

module.exports = getAvatarUserId;