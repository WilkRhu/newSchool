const connect = require("../../config/connect");

const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const delMatter = await connect("subject").where("id", id).del();
        if(delMatter) {
            return res.status(200).json("Subject successfully deleted!");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = deleteSubject;