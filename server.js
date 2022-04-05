
const express = require('express');
const app = express()
const path = require('path');
const uuid = require("uuid");
const db = require('./db/db.json')

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Hi"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"))

app.get('/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
    
})

app.get("/api/notes", (req, res) => res.json(notes))


// Save user Inputs
// delete old inputs


// app.post("/api/notes", (req, res) => {
//     let newNote = "hi"
//     console.log("newNote")


//    db.push(newNote);
//   res.json(db);
// })