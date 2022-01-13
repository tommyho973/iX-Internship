const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
  const taskQuery = Task.find();
  let fetchedTasks;
  taskQuery
    .then((documents) => {
      fetchedTasks = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Tasks fetched successfully!',
        tasks: fetchedTasks,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching tasks failed!',
      });
    });
};

exports.createTask = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const extraContent = req.body.extraContent;
  const task = new Task({
    title: title,
    content: content,
    extraContent: extraContent,
  });
  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Task created successfully!',
        task: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching tasks failed!',
      });
    });
};

exports.updateTask = (req, res, next) => {
  Task.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      content: req.body.content,
      extraContent: req.body.extraContent,
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update task!',
      });
    });
};