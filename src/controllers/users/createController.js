const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");

const create = async (req, res) => {
    try {
        const file = [];
        req.file ?  file.push(req.file.filename) : ""; 
        const {name, login, email, password, type} = req.body;
        const {error, value} = userValidate.validate({name, login, email, password, type, file: file[0] || null});
        if(!error){
            const createUser = await connect("users").returning("*").insert(User(value));
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