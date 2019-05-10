import docs from './latest.json'
import fs from 'fs'

const Types = [
  {
    type: 'list',
    action: 'change every value',
    func: [
      {
        name: 'map',
        notation: 'Functor f => (a → b) → f a → f b',
        description: 'Runs the function provided on each element on the List',
        resource: 'https://ramdajs.com/docs/#map'
      }
    ]
  },
  {
    type: 'list',
    action: 'pull a property off each value',
    func: [
      {
        name: 'pick',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#pick'
      }
    ]
  },
  {
    type: 'list',
    action:
      'receive the index of each element along with the value when iterating over a list',
    func: [
      {
        name: 'addIndex',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#addIndex'
      }
    ]
  },
  {
    type: 'list',
    action: 'pull a property off each value',
    func: [
      {
        name: 'pluck',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#pluck'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values based on custom logic',
    func: [
      {
        name: 'filter',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#filter'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values from a specific index range',
    func: [
      {
        name: 'slice',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#slice'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values from the start',
    func: [
      {
        name: 'take',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#take'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values from the start based on custom logic',
    func: [
      {
        name: 'takeWhile',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#takeWhile'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values from the end',
    func: [
      {
        name: 'takeLast',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#takeLast'
      }
    ]
  },
  {
    type: 'list',
    action: 'select values from the end based on custom logic',
    func: [
      {
        name: 'takeLastWhile',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#takeLastWhile'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove the last value',
    func: [
      {
        name: 'init',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#init'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove specific values',
    func: [
      {
        name: 'without',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#without'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values based on custom logic',
    func: [
      {
        name: 'reject',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#reject'
      }
    ]
  },
  {
    type: 'list',
    action: 'dedupe, remove all duplicates',
    func: [
      {
        name: 'uniq',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#uniq'
      }
    ]
  },
  {
    type: 'list',
    action: 'dedupe, remove all duplicates based on custom logic',
    func: [
      {
        name: 'uniqWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#uniqWith'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values based on index',
    func: [
      {
        name: 'remove',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#remove'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values from the start',
    func: [
      {
        name: 'drop',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#drop'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values from the start based on custom logic',
    func: [
      {
        name: 'dropWhile',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#dropWhile'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values from the end',
    func: [
      {
        name: 'dropLast',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#dropLast'
      }
    ]
  },
  {
    type: 'list',
    action: 'remove values from the end based on custom logic',
    func: [
      {
        name: 'dropLastWhile',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#dropLastWhile'
      }
    ]
  },
  {
    type: 'list',
    action: 'compute the sum',
    func: [
      {
        name: 'sum',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#sum'
      }
    ]
  },
  {
    type: 'list',
    action: 'compute the product',
    func: [
      {
        name: 'product',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#product'
      }
    ]
  },
  {
    type: 'list',
    action: 'compute the average',
    func: [
      {
        name: 'mean',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#mean'
      }
    ]
  },
  {
    type: 'list',
    action: 'compute the median',
    func: [
      {
        name: 'median',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#median'
      }
    ]
  },
  {
    type: 'list',
    action: 'compute based on custom logic and only output the final value',
    func: [
      {
        name: 'reduce',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#reduce',
        example: {
          code: '',
          output: ''
        }
      },
      {
        name: 'reduceRight',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#reduceRight',
        example: {
          code: '',
          output: ''
        }
      }
    ]
  },
  {
    type: 'list',
    action:
      'compute based on custom logic and output the values as they are calculated',
    func: [
      {
        name: 'scan',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#scan'
      }
    ]
  },
  {
    type: 'list',
    action: 'take the first value',
    func: [
      {
        name: 'head',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#head'
      }
    ]
  },
  {
    type: 'list',
    action: 'take the last value',
    func: [
      {
        name: 'last',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#last'
      }
    ]
  },
  {
    type: 'list',
    action: 'take a value from a specific index',
    func: [
      {
        name: 'nth',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#nth'
      }
    ]
  },
  {
    type: 'list',
    action: 'take the first occurrence of a value based on custom logic',
    func: [
      {
        name: 'find',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#find'
      }
    ]
  },
  {
    type: 'list',
    action: 'take the last occurrence of a value based on custom logic',
    func: [
      {
        name: 'findLast',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#findLast'
      }
    ]
  },
  {
    type: 'list',
    action: 'know if a specific value is present',
    func: [
      {
        name: 'contains',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#contains'
      }
    ]
  },
  {
    type: 'list',
    action: 'know where the first occurrence of a value is',
    func: [
      {
        name: 'indexOf',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#indexOf'
      }
    ]
  },
  {
    type: 'list',
    action:
      'know where the first occurrence of a value is based on custom logic',
    func: [
      {
        name: 'findIndex',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#findIndex'
      }
    ]
  },
  {
    type: 'list',
    action: 'know where the last occurrence of a value is',
    func: [
      {
        name: 'lastIndexOf',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#lastIndexOf'
      }
    ]
  },
  {
    type: 'list',
    action:
      'know where the last occurrence of a value is based on custom logic',
    func: [
      {
        name: 'findLastIndex',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#findLastIndex'
      }
    ]
  },
  {
    type: 'list',
    action: 'know if a condition is satisfied by all of the values',
    func: [
      {
        name: 'all',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#all'
      }
    ]
  },
  {
    type: 'list',
    action: 'know if a condition is satisfied by any of the values',
    func: [
      {
        name: 'any',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#any'
      }
    ]
  },
  {
    type: 'list',
    action: 'know if a condition is satisfied by none of the values',
    func: [
      {
        name: 'none',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#none'
      }
    ]
  },
  {
    type: 'list',
    action: 'replace a value at a specific index',
    func: [
      {
        name: 'update',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#update'
      }
    ]
  },
  {
    type: 'list',
    action: 'replace a value at a specific index based on custom logic',
    func: [
      {
        name: 'adjust',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#adjust'
      },
      {
        name: 'lensPath',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#lensPath'
      }
    ]
  },
  {
    type: 'list',
    action: 'add a value at the start',
    func: [
      {
        name: 'prepend',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#prepend'
      }
    ]
  },
  {
    type: 'list',
    action: 'add a value at the end',
    func: [
      {
        name: 'append',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#append'
      }
    ]
  },
  {
    type: 'list',
    action: 'add a value at a specific index',
    func: [
      {
        name: 'insert',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#insert'
      }
    ]
  },
  {
    type: 'list',
    action: 'add multiple values at a specific index',
    func: [
      {
        name: 'insertAll',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#insertAll'
      }
    ]
  },
  {
    type: 'list',
    action: 'group values based on custom logic',
    func: [
      {
        name: 'groupBy',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#groupBy'
      }
    ]
  },
  {
    type: 'list',
    action: 'know how many values it contains',
    func: [
      {
        name: 'length',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#length'
      }
    ]
  },
  {
    type: 'list',
    action: 'get a specific range of integer values',
    func: [
      {
        name: 'range',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#range'
      }
    ]
  },
  {
    type: 'list',
    action: 'split at a specific index',
    func: [
      {
        name: 'splitAt',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#splitAt'
      }
    ]
  },
  {
    type: 'list',
    action: 'split based on custom logic',
    func: [
      {
        name: 'splitWhen',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#splitWhen'
      }
    ]
  },
  {
    type: 'list',
    action: 'split into chunks of a specific length',
    func: [
      {
        name: 'splitEvery',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#splitEvery'
      }
    ]
  },
  {
    type: 'list',
    action: 'reverse',
    func: [
      {
        name: 'reverse',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#reverse'
      }
    ]
  },
  {
    type: 'list',
    action: 'sort',
    func: [
      {
        name: 'sort',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#sort'
      }
    ]
  },
  {
    type: 'list',
    action: 'sort based on custom logic',
    func: [
      {
        name: 'sortBy',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#sortBy'
      }
    ]
  },
  {
    type: 'list',
    action: 'concatenate two lists',
    func: [
      {
        name: 'concat',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#concat'
      }
    ]
  },
  {
    type: 'list',
    action: 'find the common values in two lists',
    func: [
      {
        name: 'intersection',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#intersection'
      }
    ]
  },
  {
    type: 'list',
    action: 'find the common values in two lists based on custom logic',
    func: [
      {
        name: 'intersectionWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#intersectionWith'
      }
    ]
  },
  {
    type: 'list',
    action: 'find the distinct values compared to another list',
    func: [
      {
        name: 'difference',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#difference'
      }
    ]
  },
  {
    type: 'list',
    action:
      'find the distinct values compared to another list based on custom logic',
    func: [
      {
        name: 'differenceWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#differenceWith'
      }
    ]
  },
  {
    type: 'list',
    action: 'combine two lists into a list of unique values',
    func: [
      {
        name: 'union',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#union'
      }
    ]
  },
  {
    type: 'list',
    action:
      'combine two lists into a list of unique values based on custom logic',
    func: [
      {
        name: 'unionWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#unionWith'
      }
    ]
  },
  {
    type: 'list',
    action: 'combine two lists into a list of pairs',
    func: [
      {
        name: 'zip',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#zip'
      }
    ]
  },
  {
    type: 'list',
    action: 'combine two lists into a list of pairs based on custom logic',
    func: [
      {
        name: 'zipWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#zipWith'
      }
    ]
  },
  {
    type: 'list',
    action: 'convert list of objects into one object',
    func: [
      {
        name: 'indexBy',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#indexBy'
      }
    ]
  },
  {
    type: 'list',
    action:
      'split a list into two sub lists based on a single predicate function',
    func: [
      {
        name: 'partition',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#partition'
      }
    ]
  },
  {
    type: 'object',
    action: `change every value`,
    func: [
      { name: 'map', resouce: 'https://ramdajs.com/docs/#map' },
      { name: 'mapObjIndexed', resouce: '#mapObjIndexed' }
    ]
  },
  {
    type: 'object',
    action: `select a specific key's value`,
    func: [
      { name: 'prop', resouce: 'https://ramdajs.com/docs/#prop' },
      { name: 'path', resouce: 'https://ramdajs.com/docs/#path' }
    ]
  },
  {
    type: 'object',
    action: `select a specific key's value or return a default if it is not found`,
    func: [{ name: 'propOr', resouce: '' }, { name: 'pathOr', resouce: '' }]
  },
  {
    type: 'object',
    action: `select specific keys' values`,
    func: [{ name: 'props', resouce: '' }]
  },
  {
    type: 'object',
    action: `select specific keys`,
    func: [{ name: 'pick', resouce: '' }, { name: 'pickAll', resouce: '' }]
  },
  {
    type: 'object',
    action: `select keys based on custom logic`,
    func: [{ name: 'filter', resouce: '' }, { name: 'pickBy', resouce: '' }]
  },
  {
    type: 'object',
    action: `remove a specific key`,
    func: [
      { name: 'dissoc', resouce: '' },
      { name: 'dissocPath', resouce: '' }
    ]
  },
  {
    type: 'object',
    action: `remove specific keys`,
    func: [{ name: 'omit', resouce: '' }]
  },
  {
    type: 'object',
    action: `remove specific keys based on custom logic`,
    func: [{ name: 'reject', resouce: '' }]
  },
  {
    type: 'object',
    action: `add a specific key and value`,
    func: [{ name: 'assoc', resouce: '' }, { name: 'assocPath', resouce: '' }]
  },
  {
    type: 'object',
    action: `replace a specific value based on custom logic`,
    func: [
      { name: 'lens', resouce: '' },
      { name: 'lensProp', resouce: '' },
      { name: 'lensPath', resouce: '' }
    ]
  },
  {
    type: 'object',
    action: `replace specific values based on custom logic`,
    func: [{ name: 'evolve', resouce: '' }]
  },
  {
    type: 'object',
    action: `know if a specific key is present`,
    func: [{ name: 'has', resouce: '' }, { name: 'hasIn', resouce: '' }]
  },
  {
    type: 'object',
    action: `know if a specific key has a specific value`,
    func: [{ name: 'propEq', resouce: '' }, { name: 'pathEq', resouce: '' }]
  },
  {
    type: 'object',
    action: `know if a specific key's value satisfies a custom predicate`,
    func: [
      { name: 'propSatisfies', resouce: '' },
      { name: 'pathSatisfies', resouce: '' }
    ]
  },
  {
    type: 'object',
    action: `know if specific keys have specific values`,
    func: [{ name: 'whereEq', resouce: '' }]
  },
  {
    type: 'object',
    action: `know if specific keys' values satisfy custom predicates`,
    func: [{ name: 'where', resouce: '' }]
  },
  {
    type: 'object',
    action: `list all the keys`,
    func: [{ name: 'keys', resouce: '' }, { name: 'keysIn', resouce: '' }]
  },
  {
    type: 'object',
    action: `list all the values`,
    func: [{ name: 'values', resouce: '' }, { name: 'valuesIn', resouce: '' }]
  },
  {
    type: 'object',
    action: `convert to a list of pairs`,
    func: [
      { name: 'toPairs', resouce: '' },
      { name: 'toPairsIn', resouce: '' }
    ]
  },
  {
    type: 'object',
    action: `know if two objects share the same key and value`,
    func: [{ name: 'eqProps', resouce: '' }]
  },
  {
    type: 'object',
    action: `create an object with a single key and value`,
    func: [{ name: 'objOf', resouce: '' }]
  },
  {
    type: 'object',
    action: `create an object with multiple keys and values`,
    func: [{ name: 'zipObj', resouce: '' }]
  },
  {
    type: 'object',
    action: `clone an object`,
    func: [{ name: 'clone', resouce: '' }]
  },
  {
    type: 'object',
    action: `merge two objects into one object`,
    func: [{ name: 'merge', resouce: '' }]
  },
  {
    type: 'object',
    action: `merge two objects into one object based on custom duplicate key logic`,
    func: [{ name: 'mergeWith', resouce: '' }]
  },
  {
    type: 'object',
    action: `merge more than two objects into one object`,
    func: [{ name: 'mergeAll', resouce: '' }]
  },
  {
    type: 'function',
    action: `combine functions`,
    func: [
      {
        name: 'pipe',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#pipe'
      },
      {
        name: 'compose',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#compose'
      }
    ]
  },
  {
    type: 'function',
    action: `combine promise returning functions`,
    func: [
      {
        name: 'pipeP',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#pipeP'
      },
      {
        name: 'composeP',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#composeP'
      }
    ]
  },
  {
    type: 'function',
    action: `curry a function`,
    func: [
      {
        name: 'curry',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#curry'
      }
    ]
  },
  {
    type: 'function',
    action: `partially apply a function`,
    func: [
      {
        name: 'partialRight',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#partialRight'
      },
      {
        name: 'partial',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#partial'
      }
    ]
  },
  {
    type: 'function',
    action: `uncurry a function`,
    func: [
      {
        name: 'uncurry',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#uncurry'
      }
    ]
  },
  {
    type: 'function',
    action: `swap the argument order`,
    func: [
      {
        name: 'flip',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#flip'
      }
    ]
  },
  {
    type: 'function',
    action: `apply a list of arguments`,
    func: [
      {
        name: 'apply',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#apply'
      }
    ]
  },
  {
    type: 'function',
    action: `apply multiple functions to a single value and merge the results somehow`,
    func: [
      {
        name: 'converge',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#converge'
      }
    ]
  },
  {
    type: 'function',
    action: `transform a function's arguments`,
    func: [
      {
        name: 'useWith',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#useWith'
      }
    ]
  },
  {
    type: 'function',
    action: `apply a list of functions to each argument and collect the results`,
    func: [
      {
        name: 'juxt',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#juxt'
      }
    ]
  },
  {
    type: 'function',
    action: `create a variadic function from one that takes an array`,
    func: [
      {
        name: 'unapply',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#unapply'
      }
    ]
  },
  {
    type: 'function',
    action: `restrict the number of accepted arguments to 1`,
    func: [
      {
        name: 'unary',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#unary'
      }
    ]
  },
  {
    type: 'function',
    action: `restrict the number of accepted arguments to 2`,
    func: [
      {
        name: 'binary',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#binary'
      }
    ]
  },
  {
    type: 'function',
    action: `restrict the number of accepted arguments to specific number`,
    func: [
      {
        name: 'nAry',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#nAry'
      }
    ]
  },
  {
    type: 'function',
    action: `return the supplied argument unchanged`,
    func: [
      {
        name: 'identity',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#identity'
      }
    ]
  },
  {
    type: 'function',
    action: `turn a method into a function`,
    func: [
      {
        name: 'invoker',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#invoker'
      }
    ]
  },
  {
    type: 'function',
    action: `invoke a function only once`,
    func: [
      {
        name: 'once',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#once'
      }
    ]
  },
  {
    type: 'function',
    action: `inspect values without affecting them`,
    func: [
      {
        name: 'tap',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#tap'
      }
    ]
  },
  {
    type: 'function',
    action: `bind to a specific context`,
    func: [
      {
        name: 'bind',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#bind'
      }
    ]
  },
  {
    type: 'function',
    action: `lift a function`,
    func: [
      {
        name: 'liftN',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#liftN'
      },
      {
        name: 'lift',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#lift'
      }
    ]
  },
  {
    type: 'function',
    action: `memoize`,
    func: [
      {
        name: 'memoize',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#memoize'
      }
    ]
  },
  {
    type: 'logic',
    action: `apply a function based on conditional logic`,
    func: [
      {
        name: 'ifElse',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#ifElse'
      },
      {
        name: 'cond',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#cond'
      },
      {
        name: 'unless',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#unless'
      },
      {
        name: 'when',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#when'
      }
    ]
  },
  {
    type: 'logic',
    action: `negate a value`,
    func: [
      {
        name: 'not',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#not'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if either of two values are truthy`,
    func: [
      {
        name: 'or',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#or'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if two values are truthy`,
    func: [
      {
        name: 'and',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#and'
      }
    ]
  },
  {
    type: 'logic',
    action: `invert a predicate function`,
    func: [
      {
        name: 'complement',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#complement'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if a value satisfies at least one of two predicates`,
    func: [
      {
        name: 'either',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#either'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if a value satisfies two predicates`,
    func: [
      {
        name: 'both',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#both'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if a value satisfies at least one of a list of predicates`,
    func: [
      {
        name: 'anyPass',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#anyPass'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if a value satisfies at every one of a list of predicates`,
    func: [
      {
        name: 'allPass',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#allPass'
      }
    ]
  },
  {
    type: 'logic',
    action: `produce an empty value`,
    func: [
      {
        name: 'empty',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#empty'
      }
    ]
  },
  {
    type: 'logic',
    action: `know if a value is empty`,
    func: [
      {
        name: 'isEmpty',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#isEmpty'
      }
    ]
  },

  {
    type: 'relation',
    action: `compare for value equality`,
    func: [
      {
        name: 'equals',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#equals'
      }
    ]
  },
  {
    type: 'relation',
    action: `compare for reference equality`,
    func: [
      {
        name: 'identical',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#identical'
      }
    ]
  },
  {
    type: 'relation',
    action: `know if a value is less than another`,
    func: [
      {
        name: 'lt',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#lt'
      }
    ]
  },
  {
    type: 'relation',
    action: `know if a value is less than or equal to another`,
    func: [
      {
        name: 'lte',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#lte'
      }
    ]
  },
  {
    type: 'relation',
    action: `know if a value is greater than another`,
    func: [
      {
        name: 'gt',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#gt'
      }
    ]
  },
  {
    type: 'relation',
    action: `know if a value is greater than or equal to another`,
    func: [
      {
        name: 'gte',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#gte'
      }
    ]
  },
  {
    type: 'relation',
    action: `find the smallest of two values`,
    func: [
      {
        name: 'min',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#min'
      }
    ]
  },
  {
    type: 'relation',
    action: `find the smallest of two values based on custom logic`,
    func: [
      {
        name: 'minBy',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#minBy'
      }
    ]
  },
  {
    type: 'relation',
    action: `find the largest of two values`,
    func: [
      {
        name: 'max',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#max'
      }
    ]
  },
  {
    type: 'relation',
    action: `find the largest of two values based on custom logic`,
    func: [
      {
        name: 'maxBy',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#maxBy'
      }
    ]
  },
  {
    type: 'math',
    action: `increment a number by one`,
    func: [
      {
        name: 'inc',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#inc'
      }
    ]
  },
  {
    type: 'math',
    action: `decrement a number by one`,
    func: [
      {
        name: 'dec',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#dec'
      }
    ]
  },
  {
    type: 'math',
    action: `add two numbers`,
    func: [
      {
        name: 'add',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#add'
      }
    ]
  },
  {
    type: 'math',
    action: `subtract one number from another`,
    func: [
      {
        name: 'subtract',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#subtract'
      }
    ]
  },
  {
    type: 'math',
    action: `multiple two numbers`,
    func: [
      {
        name: 'multiply',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#multiply'
      }
    ]
  },
  {
    type: 'math',
    action: `divide one number by another`,
    func: [
      {
        name: 'divide',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#divide'
      }
    ]
  },
  {
    type: 'math',
    action: `negate a number`,
    func: [
      {
        name: 'negate',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#negate'
      }
    ]
  },
  {
    type: 'math',
    action: `divide one number by another and get the remainder`,
    func: [
      {
        name: 'modulo',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#modulo'
      },
      {
        name: 'mathMod',
        notation: '',
        description: '',
        resource: 'https://ramdajs.com/docs/#mathMod'
      }
    ]
  }
]

const newData = Types.map(type => ({
  ...type,
  func: type.func.map(func => {
    const doc = docs.find(
      doc => doc.name === func.name && doc.category === type.type
    )
    return {
      ...func,
      description: doc && doc.description,
      notation: doc && doc.sig
    }
  })
}))

console.log(newData)
// fs.writeFile('./data.json', JSON.stringify(newData), console.log)
