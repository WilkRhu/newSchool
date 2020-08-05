const connect = require("../../../src/config/connect");
const lessonsValidation = require("../../../src/utils/validations/lessons/lessonsValidation");
const {
    lessionMock
} = require("../../utils/lessons/lessionsMock");


describe("Lessons Tests", () => {
    describe("Units test lessons create", () => {
        test("Create", async () => {
            try {
                const {
                    error,
                    value
                } = lessonsValidation.validate({
                    serie_id: lessionMock.serie_id,
                    subject_id: lessionMock.subject_id,
                    title: lessionMock.title,
                    content: lessionMock.content,
                    link: lessionMock.link
                });
                if (!error) {
                    const lession = await connect("lessons").returning("*").insert(value);
                    console.log(lession);
                }
            } catch (error) {
                return error;
            }
        })
    })
});