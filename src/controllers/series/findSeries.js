const connect = require("../../config/connect");

const findSeries = async (req, res) => {
    try {
        const series = await connect("series").select("*");
        return res.status(200).json(series);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findSeries;