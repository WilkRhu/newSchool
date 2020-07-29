const connect = require("../../config/connect");
const seriesValidation = require("../../utils/validations/series/seriesValidation");
const seriesSchema = require("../../domains/entity/series");

const createSerie = async (req, res) => {
    try {
        const {name} = req.body;
        const { error, value } = seriesValidation.validate({ name });
        if (!error) {
            const series = await connect("series").returning("*").insert(seriesSchema(value));
            return res.status(201).json(series[0]);
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = createSerie;

