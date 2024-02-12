const notes = require('express').Router();
const {readAndAppend, readFromFile} = require('../utils/fsTools'); // imports fsTools functions
const { v4: uuidv4 } = require('uuid'); // imports uuid

// gets saved notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data)) // 
    );
});

// adds notes
notes.post('/', (req, res) => {
    const newId = uuidv4(); // creates new id
    req.body.id = newId; // adds id to new note
    readAndAppend(req.body, './db/db.json'); // saves new note
    console.log('added note');
    // refreshs saved notes on screen
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data))
    );
    
});

module.exports = notes;
