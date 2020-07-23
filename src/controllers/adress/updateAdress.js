const connect = require("../../config/connect");

const updateAdress = async (req, res) => {
    try {
        const { user_id } = req.params;
        const adress = req.body;
        const updateAdress = await connect("adress").where("user_id", user_id).update(adress).returning("*");
        return res.status(201).json(updateAdress);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = updateAdress;