const connect = require("../../config/connect");

const deleteLessons = async (req, res) => {
    try {
        const { id } = req.params;
        await connect("lessons").where("id", id).del();
        return res.status(200).json("Lessons successfully deleted!");
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = deleteLessons;