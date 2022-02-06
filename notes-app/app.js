// const add = require('./utils.js')

// //fs.writeFileSync('notes.txt', 'My name is Andrew.')

// //fs.appendFileSync('notes.txt', ' I live in Philadelphia.')

// const sum =add(4, -2)

// console.log(sum)

//const validator = require('validator')
//console.log(validator.isEmail('abc@xyz.com'))
//console.log(validator.isURL('http://abc.com'))

// const chalk = require('chalk')

// const getNotes = require ("./notes.js")
// const msg = getNotes()
// console.log(msg)

// console.log(chalk.green("Success!"))
// console.log(chalk.blue.bold("Success!"))
// console.log(chalk.red.inverse.bold("Error!!"))

// const chalk = require('chalk')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.blue.inverse.bold('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])

// const getNotes = require('./notes.js')

// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add'){
//     console.log(chalk.green('Adding notes!'))
// } else if (command === 'remove'){
//     console.log(chalk.red('Removing note!'))
// }

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
    handler: function(argv){
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
    handler: function(argv){
        // console.log('Removing the note')
        notes.removeNotes(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler:function(){
        console.log('Reading a note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: function(){
        console.log('Listng out all notes')
    }
})

yargs.parse()
//console.log(yargs.argv)
