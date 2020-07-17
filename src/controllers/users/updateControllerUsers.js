const connect = require("../../config/connect/index");
const criptPassword = require("../../utils/cryptPassword");

const updateUsers = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const upUser = req.body;
        const verifyUser = await connect("users").select("*").where("id", id).returning("id");
        if (verifyUser.length !== 0) {
            const file = [];
            req.file ?  file.push(req.file.filename) : ""; 
            var newpass = "";
            upUser.password ? newpass =criptPassword(upUser.password) : "";
            const user = await connect("users").returning("*").where("id", verifyUser[0].id).update({
                name: upUser.name, login: upUser.login, email: upUser.email, type: upUser.type, password: newpass,
                file: file[0]
            });
            return res.status(201).json(user);
        } else {
            return res.status(404).json("User Not Found");
        }

    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = updateUsers;