const connect = require("../../config/connect");

const findMatterId = async (req, res) => {
    try {
        const { id } = req.params;
        const findId = await connect("matter").select("*").where("id", id);
        return res.status(200).json(findId);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findMatterId;