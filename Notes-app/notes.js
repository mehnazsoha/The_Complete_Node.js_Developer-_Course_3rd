// // function er maddhome onno file a data pathano
// const getNotes = (a) => {
//     return a
// }
// module.exports = getNotes
// // function er maddhome onno file a data pathano


// json er maddhome note add korte
const fs = require('fs')
const chalk = require('chalk')

const getNotes = (a) => {
    return a
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    // same title abr add korte cele add korbe na
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse("Note already exists"))
    }
    // same title abr add korte cele add korbe na
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}  // duita function eksathe export korar niom. ata korte "const notes = require('./notes')" likhlei hobe. alada kore getNote ba addNote variable nam deya lagbe na
// json er maddhome note add korte


