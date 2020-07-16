const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const path = require("path");


const mongoURI = "mongodb://localhost:27017/uploads";
const conn = mongoose.createConnection(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Init gfs
let gfs;

conn.once("open", () => {
    //init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString("hex") + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({
    storage
});

const envImage = (res, name) => {
    gfs.files.findOne({
        filename: name
    }, ({
        err,
        file
    }) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: "No file exists"
            });
        }
        return res.json(file);
    });
};

const envImages = async (name) => {
    for (let i = 0; i < name.length; i++) {
        const file = await gfs.files.findOne({
            filename: name[i].file
        });
        if (!file || file.length === 0) {
            return "No file exists";
        }
        return file;

    }
};



module.exports = {
    upload,
    envImage,
    envImages
};