const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");
const avatarFiles = require("./createAvatar");

const create = async (req, res) => {
    try {
        const {name, login, email, password, type} = req.body;
        const {error, value} = userValidate.validate({name, login, email, password, type});
        if(!error){
            const createUser = await connect("users").returning("*").insert(User(value));
            if(req.file ){
                avatarFiles(req.file , createUser[0].id );
                createUser[0].file = req.file.originalname;
            }
            createUser[0].password = undefined;
            return res.status(201).json(createUser[0]);
        } else {
            return res.status(400).json("Error Validation");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = create;