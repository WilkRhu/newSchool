const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");
const avatarFiles = require("./createAvatar");
const createToken = require("../../utils/createToken");
const envMail = require("../../utils/nodeMailer");
const {returnCreate} = require("../../utils/returnUserSchema");
const crateStudantes = require("../studantes/createStudantes");
const createTeacher = require("../teacher/createTeacher");


const create = async (req, res) => {
    try {
        const {name, login, email, password, type} = req.body;
        const student = req.body;
        const teacher = req.body;
        const {error, value} = userValidate.validate({ name, login, email, password, type });
        if(!error){
            if(value.type === "student" || value.type === "teacher" || value.type === "admin"){
                if(value.type === "student") {
                    const createUser = await connect("users").returning("*").insert(User(value));
                    const token = createToken(createUser[0].id, name, email, type);
                    const userToken = await connect("users").where("id", createUser[0].id).update({ token: token }).returning("*");
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
                    return res.status(201).json(returnCreate(userToken[0]));
                } else if(value.type === "teacher") {
                    const createUser = await connect("users").returning("*").insert(User(value));
                    const token = createToken(createUser[0].id, name, email, type);
                    const userToken = await connect("users").where("id", createUser[0].id).update({ token: token }).returning("*");
                    const data = {
                        subjects: teacher.subjects,
                        series: teacher.series
                    };
                    const teacherReturn = await createTeacher(createUser[0].id, data.subjects, data.series);
                    if (teacherReturn.error || teacherReturn.message) { 
                        await connect("users").where("id", createUser[0].id).del();
                        return res.status(400).json(teacherReturn.message || teacherReturn.error);
                    }
                    if (createUser.length !== 0) {
                        envMail(createUser[0].email, createUser[0].name, createUser[0].type);
                    }
                    if(req.file ){
                        avatarFiles(req.file , createUser[0].id );
                        createUser[0].file = req.file.originalname;
                    }
                    return res.status(201).json(returnCreate(userToken[0]));

                } else if(value.type === "admin") { 
                    const createUser = await connect("users").returning("*").insert(User(value));
                    const token = createToken(createUser[0].id, name, email, type);
                    const userToken = await connect("users").where("id", createUser[0].id).update({token: token}).returning("*");
                    if (createUser.length !== 0) {
                        envMail(createUser[0].email, createUser[0].name, createUser[0].type);
                    }
                    if(req.file ){
                        avatarFiles(req.file , createUser[0].id );
                        createUser[0].file = req.file.originalname;
                    }
                    return res.status(201).json(returnCreate(userToken[0]));
                }
            } else {
                return res.status(400).json("Type not content on sistem, types [studant, teacher, admin]");
            }
        } else {
            return res.status(400).json("Error Validation");
           
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = create;