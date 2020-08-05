const connect = require("../../config/connect");

const findClasses = async (req, res) => {
    try {
        const lessons = await connect("lessons").select("*");
        return res.status(200).json(lessons);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findClasses;