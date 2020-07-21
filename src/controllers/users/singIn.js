const connect = require("../../config/connect");
const bcrypt = require("bcrypt");
const createToken = require("../../utils/createToken");

const singIn = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        if (!email || !password) {
            return res.status(400).json("Dados Insuficientes!");
        }

        const user = await connect("users").select("*").where("email", email);
        const newToken = createToken(user[0].nome, user[0].email);
        await connect("users").where("email", email).update({
            token: newToken
        });

        if (!user) {
            return res.status(400).json("Usuário e/ou senha inválidos!");
        }

        const pass_ok = await bcrypt.compare(password, user[0].password);

        if (!pass_ok) {
            return res.status(401).json("Usuário e/ou senha inválidos");
        }
        user[0].password = undefined;
        return res.status(200).json(user[0]);
    } catch (error) {
        return res.status(400).json(error);
    }

};

module.exports = singIn;