const connect = require("../../config/connect");
const getUsersAvatar = require("../../domains/entity/avatarFile/getUsersAvatar");
const getAvatarUserId = require("../../domains/entity/avatarFile/getUserIdFile");
const { returnFind, returnFindId } = require("../../utils/returnUserSchema");

const findUsers = async (req, res) => {
    try {
        const users = await connect("users").select("*");
        if (users.length === 0) {
            return res.status(404).json("Users not found!");
        } else {
            const file = await getUsersAvatar(users);
            return res.status(200).json(returnFind(users, file));
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

const findUserId = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const user = await connect("users").select("*").where("id", id);
        if (user.length === 0) {
            return res.status(404).json("User Not Found");
        } else {
            const file = await getAvatarUserId(id);
            return res.status(200).json(returnFindId(user[0], file));
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};



module.exports = {
    findUsers,
    findUserId
};