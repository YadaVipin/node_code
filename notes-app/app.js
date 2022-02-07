
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// add, remove, read ,list

// create add command with title and body, save it in data
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){
        // console.log('Removing the note')
        notes.removeNotes(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing your note',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
