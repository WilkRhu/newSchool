const connect = require("../../config/connect");
const userValidate = require("../../utils/validations/users/userValidations");
const User = require("../../domains/entity/users");

const create = async (req, res) => {
    try {
        const file = req.file.filename;
        const {name, login, email, password, type} = req.body;
        const {error, value} = userValidate.validate({name, login, email, password, type, file});
        if(!error){
            const createUser = await connect("users").returning("id").insert(User(value));
            const userCad = await connect("users").select("*").where("id", createUser[0]);
            return res.status(201).json(userCad[0]);
        } else {
            return res.status(400).json("Error Validation");
        }
    } catch (error) {
        return res.status(400).json({error});
    }
};

module.exports = create;