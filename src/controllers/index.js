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
const createSubject = require("./subject/createSubjects");
const updateSubject = require("./subject/updateSubject");
const findSubject = require("./subject/findSubject");
const findSubjectId = require("./subject/findSubjectId");
const deleteSubject = require("./subject/deleteSubject");
const createLessons = require("./lessons/createLessons");
const updateLessons = require("./Lessons/updateLessons");
const deleteLessons = require("./Lessons/deleteLessons");
const findLessons = require("./Lessons/findLessons");
const findIDLessons = require("./Lessons/findIDLessons");


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
    createSubject,
    updateSubject,
    findSubject,
    findSubjectId,
    deleteSubject,
    createLessons,
    updateLessons,
    deleteLessons,
    findLessons,
    findIDLessons
};