const Contact = require('../models/contact');

exports.getContacts = (req, res, next) => {
  const contactQuery = Contact.find();
  let fetchedContacts;
  contactQuery
    .then((documents) => {
      fetchedContacts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Contacts fetched successfully!',
        contacts: fetchedContacts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching contacts failed!',
      });
    });
};

exports.createContact = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const contact = new Contact({
    name: name,
    email: email,
    phone: phone,
  });
  contact
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Contact created successfully!',
        task: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteContact = (req, res, next) => {
  Contact.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching tasks failed!',
      });
    });
};

exports.updateContact = (req, res, next) => {
  Contact.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
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