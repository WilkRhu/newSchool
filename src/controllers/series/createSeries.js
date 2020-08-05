const connect = require("../../config/connect");
const seriesValidation = require("../../utils/validations/series/seriesValidation");
const seriesSchema = require("../../domains/entity/series");

const createSerie = async (req, res) => {
    try {
        const {name, subject} = req.body;
        const { error, value } = seriesValidation.validate({ name });
        if (!error) {
            const series = await connect("series").returning("*").insert(seriesSchema(value));
            for (let i = 0; i < subject.length; i++) {
                await connect("serie_subject").insert({serie_id: series[0].id, subject_id: subject[i] });
            }
            return res.status(201).json(series[0]);
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = createSerie;

