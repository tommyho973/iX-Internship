const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use('/feed', feedRoutes);

mongoose
  .connect(
    'mongodb+srv://tommyho973:A2kGgipTjpaT4QCQ@cluster0.vtuil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));