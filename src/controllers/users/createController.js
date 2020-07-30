const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");
const avatarFiles = require("./createAvatar");
const createToken = require("../../utils/createToken");
const envMail = require("../../utils/nodeMailer");
const {returnCreate} = require("../../utils/returnUserSchema");
const crateStudantes = require("../studantes/createStudantes");

const create = async (req, res) => {
    try {
        const {name, login, email, password, type} = req.body;
        const student = req.body;
        const token = createToken(name, email, type);
        const {error, value} = userValidate.validate({ name, login, email, password, type, token });
        if(!error){
            if(value.type === "student") {
                const createUser = await connect("users").returning("*").insert(User(value));
                const data = {
                    series_id: student.series_id,
                    number_registration: student.number_registration,
                    student_responsible_one: student.student_responsible_one,
                    student_responsible_two: student.student_responsible_two,
                    date_of_birth: student.date_of_birth
                };
                const studant = await crateStudantes(createUser[0].id, data);
                if (studant.error || studant.message) { 
                    await connect("users").where("id", createUser[0].id).del();
                    return res.status(400).json(studant.message || studant.error);
                }
                if (createUser.length !== 0) {
                    envMail(createUser[0].email, createUser[0].name, createUser[0].type);
                }
                if(req.file ){
                    avatarFiles(req.file , createUser[0].id );
                    createUser[0].file = req.file.originalname;
                }
                return res.status(201).json(returnCreate(createUser[0]));
            } else if(value.type === "admin") { 
                const createUser = await connect("users").returning("*").insert(User(value));
                if (createUser.length !== 0) {
                    envMail(createUser[0].email, createUser[0].name, createUser[0].type);
                }
                if(req.file ){
                    avatarFiles(req.file , createUser[0].id );
                    createUser[0].file = req.file.originalname;
                }
                return res.status(201).json(returnCreate(createUser[0]));
            }
        } else {
            return res.status(400).json("Error Validation");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = create;