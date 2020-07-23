const connect = require("../../config/connect");

const deleteAdress = async (req, res) => {
    try {
        const { user_id } = req.params;
        await connect("adress").where("user_id", user_id).del();    
        return res.status(200).json("User deleted on success!");
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = deleteAdress;