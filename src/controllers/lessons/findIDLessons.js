const connect = require("../../config/connect");

const findIDClasses = async (req, res) => {
    try {
        const { id } = req.params;
        const lessons = await connect("lessons").select("*").where("id", id);
        return res.status(200).json(lessons);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findIDClasses;