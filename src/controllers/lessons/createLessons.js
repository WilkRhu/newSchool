const connect = require("../../config/connect");
const classesValidation = require("../../utils/validations/lessons/lessonsValidation");
const Lessons = require("../../domains/entity/lessons");

const createLessons = async (req, res) => {
    try {
        const lessons = req.body;
        const {
            error,
            value
        } = classesValidation.validate({
            serie_id: lessons.serie_id,
            subject_id: lessons.subject_id,
            title: lessons.title,
            content: lessons.content,
            link: lessons.link
        });
        if (!error) {
            const creatingClasse = await connect("lessons").returning("*").insert(Lessons(value));
            return res.status(201).json(creatingClasse);
        }
        return res.status(400).json(error);

    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = createLessons;