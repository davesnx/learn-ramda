import docs from './jsdocs.json'
import table from './what-function-should-I-use-data.json'
import fs from 'fs'

const newData = table.map(row => ({
  ...row,
  func: row.func.map(func => {
    const doc = docs.find(
      doc => doc.name === func.name
    )

    return {
      name: func.name,
      longname: doc && doc.longname,
      description: doc && doc.description,
      signature: doc && doc.signature,
      example: doc && doc.example
    }
  })
}))

// console.log(newData.map(n => n.func))
fs.writeFile('./../src/data.json', JSON.stringify(newData), console.log)
