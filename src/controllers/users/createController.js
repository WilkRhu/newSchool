const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");
const avatarFiles = require("./createAvatar");
const createToken = require("../../utils/createToken");
const envMail = require("../../utils/nodeMailer");
const {returnUserSchema} = require("../../utils/returnUserSchema");

const create = async (req, res) => {
    try {
        const {name, login, email, password, type} = req.body;
        const token = createToken(name, email);
        const {error, value} = userValidate.validate({ name, login, email, password, type, token });
        if(!error){
            const createUser = await connect("users").returning("*").insert(User(value));
            if (createUser.length !== 0) {
                envMail(createUser[0].email, createUser[0].name, createUser[0].type);
            }
            if(req.file ){
                avatarFiles(req.file , createUser[0].id );
                createUser[0].file = req.file.originalname;
            }
            return res.status(201).json(returnUserSchema(createUser[0]));
        } else {
            return res.status(400).json("Error Validation");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = create;