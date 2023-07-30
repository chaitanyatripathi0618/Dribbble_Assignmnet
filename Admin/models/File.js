const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imgSchema = new mongoose.Schema({
    Servicename: String,
    description: String,
    name: String,
    contents: String,
    email: String,
    img: {
        data: Buffer,
        contentType: String,
    },
    img2: {
        data: Buffer,
        contentType: String,
    },
});

const ImgModel = mongoose.model('Image', imgSchema);
module.exports = ImgModel;