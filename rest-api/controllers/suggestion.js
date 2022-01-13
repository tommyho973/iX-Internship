const Suggestion = require('../models/suggestion');

exports.getSuggestions = (req, res, next) => {
  const suggestionQuery = Suggestion.find();
  let fetchedSuggestions;
  suggestionQuery
    .then((documents) => {
      fetchedSuggestions = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Suggestions fetched successfully!',
        suggestions: fetchedSuggestions,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching Suggestions failed!',
      });
    });
};

exports.createSuggestion = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const suggestion = new Suggestion({
    title: title,
    content: content,
  });
  suggestion
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Suggestion created successfully!',
        suggestion: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteSuggestion = (req, res, next) => {
  Suggestion.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching Suggestions failed!',
      });
    });
};

exports.updateSuggestion = (req, res, next) => {
  Suggestion.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      content: req.body.content,
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update Suggestion!',
      });
    });
};