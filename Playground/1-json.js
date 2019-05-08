const fs = require('fs')

const book = {
    title: 'Romeo Juliet',
    author: 'Shakespeear'
}

const bookJSON = JSON.stringify(book)  // Converts a JavaScript value to a JavaScript Object Notation (JSON) string
// console.log(bookJSON)
fs.writeFileSync('1-json.json', bookJSON)  // akta json file create kore oetay bookJSON er shob data store korbe

// const parseData = JSON.parse(bookJSON)  // Converts a JavaScript Object Notation (JSON) string into an object.
// console.log(parseData.author)
