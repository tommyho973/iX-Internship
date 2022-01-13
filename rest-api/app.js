const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const feedRoutes = require('./routes/feed');
const tasksRoutes = require('./routes/tasks');
const contactRoutes = require('./routes/contact');
const suggestionRoutes = require('./routes/suggestion');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use('/feed', feedRoutes);
app.use('/tasks',  tasksRoutes);
app.use('/contact', contactRoutes);
app.use('/suggest', suggestionRoutes);

mongoose
  .connect(
    'mongodb+srv://tommyho973:oGzdhw2KZx8w3ti9@cluster0.vtuil.mongodb.net/Cluster0?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));