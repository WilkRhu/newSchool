const connect = require("../../config/connect");

const updateStudant = async (data, userId) => {
    try {
        const update = await connect("studantes").where("user_id", userId).update(data).returning("*");
        return update;
    } catch(error) {
        return error;
    }
};


module.exports = updateStudant;