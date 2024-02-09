const notes = require('express').Router();
const {readAndAppend, readFromFile} = require('../utils/fsTools');
const { v4: uuidv4 } = require('uuid');

notes.get('/api/notes.js', (req, res) => {
    readFromFile('../NotePad/db/db.json').then((data) => 
    res.json(JSON.parse(data))
    );
});

notes.post('/api/notes.js', (req, res) => {
    const newId = uuidv4();
    req.body.id = newId;
    readAndAppend(req.body, '../NotePad/db/db.json');
    console.log('added note');
    readFromFile('../NotePad/db/db.json').then((data) => 
    res.json(JSON.parse(data))
    );
    
});

module.exports = notes;
