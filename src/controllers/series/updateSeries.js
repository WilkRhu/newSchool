const connect = require("../../config/connect");

const updateSeries = async (req, res) => {
    try {
        const { id } = req.params;
        const series = req.body;
        const upSeries = await connect("series").update(series).where("id", id).returning("*");
        return res.status(201).json(upSeries);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = updateSeries;