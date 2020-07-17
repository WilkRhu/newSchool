const connect = require("../../config/connect");

const deletUsers = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const verifyUser = await connect("users").select("*").where("id", id);
        if (verifyUser.length !== 0) {
            await connect("users").where("id", id).del();
            return res.status(200).json("User deleted on sucess!");
        } else {
            return res.status(404).json("User not found");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = deletUsers;