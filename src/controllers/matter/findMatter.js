const connect = require("../../config/connect");

const findMatter = async (req, res) => {
    try {
        const find = await connect("matter").select("*");
        return res.status(200).json(find);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findMatter;