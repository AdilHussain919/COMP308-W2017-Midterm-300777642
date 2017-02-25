/*
FileName: books.js
Author: Adil Hussain
StudentID: 300777642
Web App: My Favourite Booklist App
*/
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
