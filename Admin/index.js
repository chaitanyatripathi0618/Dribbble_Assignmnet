const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const imageModel = require('./models/File');

const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://chaitanya123:chaitanya123@cluster0.bck4ey7.mongodb.net/userLogin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: 'testImage1', maxCount: 1 },
  { name: 'testImage2', maxCount: 1 },
]);

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error uploading files');
    }

    const saveImage = new imageModel({
      Servicename: req.body.serviceName,
      description: req.body.description,
      name: req.body.name,
      contents: req.body.contents,
      email: req.body.email,
      img: {
        data: fs.readFileSync(path.join('uploads', req.files['testImage1'][0].filename)),
        contentType: 'image/png',
      },
      img2: {
        data: fs.readFileSync(path.join('uploads', req.files['testImage2'][0].filename)),
        contentType: 'image/png',
      },
    });

    saveImage
      .save()
      .then(() => {
        console.log('images are saved');
        res.send('Images are saved');
      })
      .catch((err) => {
        console.log(err, 'error');
        res.status(500).send('Error saving images');
      });
  });
});


app.get('/upload', async (req, res) => {
    const allData = await imageModel.find();
    const imageDataWithBase64 = allData.map((item) => ({
      ...item._doc,
      img: {
        data: item.img.data.toString('base64'),
        contentType: item.img.contentType,
      },
      img2: item.img2 && item.img2.data ? item.img2.data.toString('base64') : null,
    }));
    res.json(imageDataWithBase64);
  });
  
app.listen(4000, () => {
    console.log('Server build');
});
