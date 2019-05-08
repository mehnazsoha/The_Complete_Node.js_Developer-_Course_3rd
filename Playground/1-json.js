// // new file create kore data read write korar system
// const fs = require('fs')

// const book = {
//     title: 'Romeo Juliet',
//     author: 'Shakespeear'
// }

// const bookJSON = JSON.stringify(book)  // Converts a JavaScript value to a JavaScript Object Notation (JSON) string
// fs.writeFileSync('1-json.json', bookJSON)  // akta json file create kore oetay bookJSON er shob data store korbe

// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)  // Converts a JavaScript Object Notation (JSON) string into an object.
// console.log(parseData.author)

// const dataBuffer = fs.readFileSync('1-json.json')  // Synchronously reads the entire contents of a file.
// const dataJSON =dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)

// console.log(dataBuffer.toString())  // dataBuffer er por toString() na dile buffer value output dibe. toString() dile ja file a likha thakbe taie output dibe
// // new file create kore data read write korar system


// existing file er data change korar system 
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name='soha'
data.age=22

const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)
// existing file er data change korar system 