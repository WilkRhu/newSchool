const connect = require("../../config/connect");

const updateLessons = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const lessons = req.body;
        const updateLesson = await connect("lessons").returning("*").update(lessons).where("id", id);
        return res.status(201).json(updateLesson);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = updateLessons;