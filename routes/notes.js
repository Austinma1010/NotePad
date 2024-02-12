const notes = require('express').Router();
const {readAndAppend, readFromFile} = require('../utils/fsTools');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data))
    );
});

notes.post('/', (req, res) => {
    const newId = uuidv4();
    req.body.id = newId;
    readAndAppend(req.body, './db/db.json');
    console.log('added note');
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data))
    );
    
});

module.exports = notes;
