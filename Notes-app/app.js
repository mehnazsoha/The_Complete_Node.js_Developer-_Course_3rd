//    	************************************************ packages *******************************************************
//		npm init
//		npm i nodemon - D
//		npm i validator (validation package)
//		npm i chalk (console a color print package)
//		npm i yargs (build interactive command line tools by parsing arguments and generating an elegant user interface)
//		************************************************ packages *******************************************************

// // file create korte
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is soha')  //aeta diye ja likha hobe taie txt file a ashbe
// fs.appendFileSync('notes.txt', '\nhello')  //aeta diye ja likha hobe ta ager txt file a ja likha thakbe tar pore add hobe
// // file create korte


// // onno file theke function call kore value pathanor system 
// const add = require('./utils')
// const sum = add(55, 9)
// console.log(sum)

// const notes = require('./notes')
// const getNote = notes('Your note...')
// console.log(getNote)
// // onno file theke function call kore value pathanor system 


// // valid ki na sheta check korte
// const validator = require('validator')
// console.log(validator.isEmail('soha@example.com'))
// console.log(validator.isURL('https://fb.com'))
// // valid ki na sheta check korte


// // console a color print korte
// const chalk = require('chalk')
// console.log(chalk.green('Success!'))
// // console a color print korte


// console.log(process.argv[2])  //terminal a node app.js soha likhle output soha dibe.file call kore jai dibo taie output dibe


// // node app.js er upor jta likhbo sheta condition a thakle output dibe. na thakle output dibe na
// const command = process.argv[2]

// console.log(process.argv)  //node app.js remove --title="Things to do" dile title dibe

// if (command === 'add') {
// 	console.log("Adding notes!")
// } else if (command === 'remove') {
// 	console.log("Removing notes!")
// }
// // node app.js er upor jta likhbo sheta condition a thakle output dibe. na thakle output dibe na


// // command line arguments (console er kaj korte)
const yargs = require('yargs')
const notes = require('./notes')  // duita function aekhane onno file theke eksathe call korte
// console.log(process.argv)
yargs.version('1.2.0')  //customize yargs version

// create add command
yargs.command({
	command: 'add',
	describe: 'Add new note',
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
	handler: function (argv) {
        // // onno kno file theke function call na korle nicher dui line likhte hobe
		// console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)

        // onno kno file theke function call korle nicher line likhte hobe
        notes.addNotes(argv.title, argv.body)
        // (node app.js add --title="t" --body="b") console a data add korar system
	}
})
// create add command


// create remove command
yargs.command({
	command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
    },
	handler: function (argv) {
        // console.log('Removing the note!')
        
        notes.removeNotes(argv.title)
	}
})
// create remove command


// create list command
yargs.command({
	command: 'list',
	describe: 'Listing the notes',
	handler: function () {
		console.log('List of all notes!')
	}
})
// create list command


// create read command
yargs.command({
	command: 'read',
	describe: 'Reading note',
	handler: function () {
		console.log('Reading the note!')
	}ff
})
// create read command

yargs.parse()

// console.log(yargs.argv)  // aeta na dile kno output dibe na. jodi aeta na diye yargs.parse() dae thle output dibe
// // command line arguments (console er kaj korte)