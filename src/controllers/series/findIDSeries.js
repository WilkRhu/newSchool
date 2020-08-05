const connect = require("../../config/connect");

const findIDSeries = async (req, res) => {
    try {
        const { id } = req.params;
        const series = await connect("series").select("*").where("id", id);
        return res.status(200).json(series);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findIDSeries;