
const express = require('express');
const path = require('path');
const uuid = require("uuid");
const db = require('./db/db.json')
const fs = require('fs');


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"))

app.get('/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
    
})
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, ('db/db.json')))
})

app.get('*', (req, res)  => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
    
})
app.post('/api/notes', (req, res)  => {
   const currentNotes = JSON.parse(fs.readFileSync('db/db.json'))
   let newNote = req.body
   currentNotes.push(newNote)
   fs.writeFileSync('db/db.json',JSON.stringify(currentNotes))
   res.json(currentNotes)
    
})

// Save user Inputs
// delete old inputs










app.listen(PORT, console.log("Hi"))