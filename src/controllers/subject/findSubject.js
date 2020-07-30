const connect = require("../../config/connect");

const findSubject = async (req, res) => {
    try {
        const find = await connect("subject").select("*");
        return res.status(200).json(find);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findSubject;