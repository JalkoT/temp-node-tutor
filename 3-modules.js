// Module - Encapsulated Code (only share minimum (what we want))
// Every file in node is module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi('Fauzi')
sayHi(names.rahmi)
sayHi(names.ikram)