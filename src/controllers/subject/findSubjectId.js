const connect = require("../../config/connect");

const findSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const findId = await connect("subject").select("*").where("id", id);
        return res.status(200).json(findId);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findSubject;