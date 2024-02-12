// Import express, path, and router file
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/index.js');
// assign port
const PORT = process.env.PORT || 3001;
const app = express();

// adds middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);

// returns index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// returns notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// returns index html for any invalid paths
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);
// starts app
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
