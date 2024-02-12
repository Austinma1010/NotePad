// recieves /api requests
const router = require('express').Router();

const notesRouter = require('./notes');

router.use('/notes', notesRouter); // sends /api/notes requests to notes.js

module.exports = router;