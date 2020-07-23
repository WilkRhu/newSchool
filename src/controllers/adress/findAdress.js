const connect = require("../../config/connect");

const findAdress = async (req, res) => {
    try {
        const adress = await connect("adress").select("*");
        return res.status(200).json(adress);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findAdress;