const connect = require("../../config/connect");

const deleteSeries = async (req, res) => {
    try {
        const { id } = req.params;
        await connect("series").where("id", id).del();
        return res.status(200).json("Serie Deleting successfully!");
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = deleteSeries;