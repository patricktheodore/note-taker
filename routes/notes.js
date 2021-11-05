const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const chalk = require('chalk');

const noteRouter = express.Router();

function getDb() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf8'));
}

noteRouter.get('/api/notes', (req, res) => {
    res.json(getDb());
});

noteRouter.post('/api/notes', (req, res) => {
    const newNote = { 
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }; 

    const notes = JSON.stringify(getDb().concat([newNote]));
    
    fs.writeFile(path.join(__dirname, "../db/db.json"), notes, function(err) {
        if(err) {
            return console.log(err); 
        }
        console.log(chalk.yellowBright((`SUCCESS! ${req.body.title} HAS BEEN ADDED!`)));
        res.json(newNote);
    });
})

noteRouter.delete('/api/notes/:id', (req, res) => {

    const notes = getDb(); 
    const deletedNoteID = req.params.id;

    const filtered = notes.filter((note) => note.id !== deletedNoteID);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(filtered), function(err) {
        if(err) {
            return console.log(err); 
        }
        console.log(chalk.redBright((`DONE! NOTE #${req.params.id} HAS BEEN DELETED`)));
        res.json(filtered);
    });
})

module.exports = noteRouter;
