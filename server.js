// Start of server

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// Var to refer back to
const express = require("express");
const path = require('path');
let dbJson = require('./Develop/db/db.json')

// app and port
const app = express();
const PORT = process.env.PORT || 8000;

// creating backend routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("develop/public"));



app.get('/api/notes', function (req, res) {
    res.send(dbJson)
});


app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
});


// talk to notes html

app.get('/takeNotes', function (req, res) {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
});


app.post('/api/notes', function (req, res) {
    let newNote = req.body
    dbJson.push(req.body)
    res.send(true)
});

// to delete 

app.delete('/api/notes/:id', function (req, res) {
    console.log(req.params.id)
    const myId= dbJson.findIndex (item => { item.id == req.params.id});
    console.log(myId);
    dbJson.splice(myId,1);
    console.log(dbjson)
    res.json(true)
});

