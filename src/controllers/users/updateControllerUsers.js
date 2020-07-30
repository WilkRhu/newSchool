const connect = require("../../config/connect/index");
const criptPassword = require("../../utils/cryptPassword");
const avatarFilesUploads = require("./updateAvatar");
const avatarFiles = require("./createAvatar");
const { returnUpdateStudant } = require("../../utils/returnUserSchema");
const updateStudant = require("../studantes/updateStudantes");

const updateUsers = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const upUser = req.body;
        const verifyUser = await connect("users").select("*").where("id", id).returning("id");
        if (verifyUser.length !== 0) {
            var newpass = "";
            upUser.password ? newpass = criptPassword(upUser.password) : "";
            const user = await connect("users").returning("*").where("id", verifyUser[0].id).update({
                name: upUser.name,
                login: upUser.login,
                email: upUser.email,
                type: upUser.type,
                password: newpass,
                updated_at: new Date(),
            });
            if (verifyUser[0].type === "student") {
                const data = {
                    number_registration: req.body.number_registration,
                    student_responsible_one: req.body.student_responsible_one,
                    student_responsible_two: req.body.student_responsible_two,
                    date_of_birth: req.body.date_of_birth
                };

                await updateStudant(data, verifyUser[0].id);
                return res.status(201).json(returnUpdateStudant(data, user[0]));
            }
            if (req.file) {
                const verifyFile = await connect("file").select("*").where("user_id", id);
                if(verifyFile.length === 0){
                    avatarFiles(req.file, id);
                } else {
                    avatarFilesUploads(req.file, id);
                }
            }
        } else {
            return res.status(404).json("User Not Found");
        }

    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = updateUsers;