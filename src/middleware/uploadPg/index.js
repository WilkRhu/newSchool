const multer = require("multer");
 
var storage = multer.memoryStorage();
var maxSize = 1 * 1000 * 1000;
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize }
});
 
module.exports = upload;