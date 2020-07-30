const create = require("./users/createController");
const {findUsers, findUserId} = require("./users/findsUsers");
const updateUsers = require("./users/updateControllerUsers");
const deletUsers = require("./users/deleteControllerUsers");
const singIn = require("./users/singIn");
const createAdress = require("./adress/createAdress");
const updateAdress = require("./adress/updateAdress");
const findAdress = require("./adress/findAdress");
const deleteAdress = require("./adress/deleteAdress");
const createSeries = require("./series/createSeries");


module.exports = {
    create,
    findUsers,
    findUserId,
    updateUsers,
    deletUsers,
    singIn,
    createAdress,
    updateAdress,
    findAdress,
    deleteAdress,
    createSeries,
    
};