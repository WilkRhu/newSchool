const create = require("./createController");
const {findUsers, findUserId} = require("./findsUsers");

module.exports = {
    create,
    findUsers,
    findUserId
};