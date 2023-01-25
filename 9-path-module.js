//-------------Path module for file location path----------------
const path = require('path')

//-----------separator property----------------
console.log(path.sep)//returning platform separator
//----------------end--------------------------

//---------------returning path form each folder---------------
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
//---------------------end-------------------------------------

//-----------------returning base name path--------------------
const base = path.basename(filePath)
console.log(base)
//-----------------------end-----------------------------------

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)