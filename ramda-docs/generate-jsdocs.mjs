import jsdoc from 'jsdoc-api'
import fs from 'fs'
import path from 'path'
import util from 'util'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const NODE_MODULES = path.resolve('..', 'node_modules')
const RAMDA = path.join(NODE_MODULES, 'ramda', 'dist', 'ramda.js')

const getSignature = tags => {
  const signatures = tags.filter(tag => tag.title === 'sig')
  return signatures && signatures[0] && signatures[0].text
}

const getExamples = examples => {
  const example = examples && examples[0]
  return '  ' + example.replace(/ {4}/g, ' ')
}

readFile(RAMDA, 'utf8')
.then((data) => jsdoc.explain({ source: data }))
.then((jsdocs) => {
  const typeDef = jsdocs.filter(i => i.comment && i.memberof === 'R')

  return typeDef.map(t => ({
    kind: t.kind,
    description: t.description,
    example: getExamples(t.examples),
    name: t.name,
    signature: getSignature(t.tags),
    longname: t.longname
  }))
})
.then((data) => {
  // console.log(data)
  writeFile('./jsdocs.json', JSON.stringify(data))
})
.catch(console.log)
