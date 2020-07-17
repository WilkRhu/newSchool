const create = require("./createController");
const {findUsers, findUserId} = require("./findsUsers");
const updateUsers = require("./updateControllerUsers");
const deletUsers = require("./deleteControllerUsers");


module.exports = {
    create,
    findUsers,
    findUserId,
    updateUsers,
    deletUsers
};