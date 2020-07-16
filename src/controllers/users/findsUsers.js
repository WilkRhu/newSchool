const connect = require("../../config/connect");
const {envImages} = require("../../middleware/uploadMongo");

const findUsers = async (req, res) => {
    try {
        const users = await connect("users").select("*");
        if (users.length === 0) {
            return res.status(404).json("Users not found!");
        } else {
            return res.status(200).json(users);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};

const findUserId = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await connect("users").select("*").where("id", id);
        if (user.length === 0) {
            return res.status(404).json("User Not Found");
        } else {
            return res.status(200).json(user[0]);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};



module.exports = {
    findUsers,
    findUserId
};