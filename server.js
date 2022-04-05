
const express = require('express');
const { dirname } = require('path');
const app = express()
const path = require('path');

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Hi"))

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"))

app.get('/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
    
})
