const Types = [
  {
    type: 'List',
    action: 'change every value',
    func: {
      name: 'map',
      notation: 'Functor f => (a → b) → f a → f b',
      description: 'Runs the function provided on each element on the List',
      resource: 'https://ramdajs.com/docs/#map'
    },
    example: {
      code: `
        const double = x => x * 2;
        R.map(double, [1, 2, 3]);
      `,
      output: `
        [2, 4, 6]
      `
    }
  },
  {
    type: 'List',
    action: 'pull a property off each value',
    func: {
      name: 'pick',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#pick'
    },
    example: {
      code: ``,
      output: ``
    }
  },
  {
    type: 'List',
    action:
      'receive the index of each element along with the value when iterating over a list',
    func: {
      name: 'addIndex',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#addIndex'
    }
  },
  {
    type: 'List',
    action: 'pull a property off each value',
    func: {
      name: 'pluck',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#pluck'
    }
  },
  {
    type: 'List',
    action: 'select values based on custom logic',
    func: {
      name: 'filter',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#filter'
    }
  },
  {
    type: 'List',
    action: 'select values from a specific index range',
    func: {
      name: 'slice',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#slice'
    }
  },
  {
    type: 'List',
    action: 'select values from the start',
    func: {
      name: 'take',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#take'
    }
  },
  {
    type: 'List',
    action: 'select values from the start based on custom logic',
    func: {
      name: 'takeWhile',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#takeWhile'
    }
  },
  {
    type: 'List',
    action: 'select values from the end',
    func: {
      name: 'takeLast',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#takeLast'
    }
  },
  {
    type: 'List',
    action: 'select values from the end based on custom logic',
    func: {
      name: 'takeLastWhile',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#takeLastWhile'
    }
  },
  {
    type: 'List',
    action: 'remove the last value',
    func: {
      name: 'init',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#init'
    }
  },
  {
    type: 'List',
    action: 'remove specific values',
    func: {
      name: 'without',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#without'
    }
  },
  {
    type: 'List',
    action: 'remove values based on custom logic',
    func: {
      name: 'reject',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#reject'
    }
  },
  {
    type: 'List',
    action: 'dedupe, remove all duplicates',
    func: {
      name: 'uniq',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#uniq'
    }
  },
  {
    type: 'List',
    action: 'dedupe, remove all duplicates based on custom logic',
    func: {
      name: 'uniqWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#uniqWith'
    }
  },
  {
    type: 'List',
    action: 'remove values based on index',
    func: {
      name: 'remove',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#remove'
    }
  },
  {
    type: 'List',
    action: 'remove values from the start',
    func: {
      name: 'drop',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#drop'
    }
  },
  {
    type: 'List',
    action: 'remove values from the start based on custom logic',
    func: {
      name: 'dropWhile',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#dropWhile'
    }
  },
  {
    type: 'List',
    action: 'remove values from the end',
    func: {
      name: 'dropLast',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#dropLast'
    }
  },
  {
    type: 'List',
    action: 'remove values from the end based on custom logic',
    func: {
      name: 'dropLastWhile',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#dropLastWhile'
    }
  },
  {
    type: 'List',
    action: 'compute the sum',
    func: {
      name: 'sum',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#sum'
    }
  },
  {
    type: 'List',
    action: 'compute the product',
    func: {
      name: 'product',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#product'
    }
  },
  {
    type: 'List',
    action: 'compute the average',
    func: {
      name: 'mean',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#mean'
    }
  },
  {
    type: 'List',
    action: 'compute the median',
    func: {
      name: 'median',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#median'
    }
  },
  {
    type: 'List',
    action: 'compute based on custom logic and only output the final value',
    func: {
      name: 'reduce/reduceRight',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#reduceRight'
    }
  },
  {
    type: 'List',
    action:
      'compute based on custom logic and output the values as they are calculated',
    func: {
      name: 'scan',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#scan'
    }
  },
  {
    type: 'List',
    action: 'take the first value',
    func: {
      name: 'head',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#head'
    }
  },
  {
    type: 'List',
    action: 'take the last value',
    func: {
      name: 'last',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#last'
    }
  },
  {
    type: 'List',
    action: 'take a value from a specific index',
    func: {
      name: 'nth',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#nth'
    }
  },
  {
    type: 'List',
    action: 'take the first occurrence of a value based on custom logic',
    func: {
      name: 'find',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#find'
    }
  },
  {
    type: 'List',
    action: 'take the last occurrence of a value based on custom logic',
    func: {
      name: 'findLast',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#findLast'
    }
  },
  {
    type: 'List',
    action: 'know if a specific value is present',
    func: {
      name: 'contains',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#contains'
    }
  },
  {
    type: 'List',
    action: 'know where the first occurrence of a value is',
    func: {
      name: 'indexOf',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#indexOf'
    }
  },
  {
    type: 'List',
    action:
      'know where the first occurrence of a value is based on custom logic',
    func: {
      name: 'findIndex',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#findIndex'
    }
  },
  {
    type: 'List',
    action: 'know where the last occurrence of a value is',
    func: {
      name: 'lastIndexOf',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#lastIndexOf'
    }
  },
  {
    type: 'List',
    action:
      'know where the last occurrence of a value is based on custom logic',
    func: {
      name: 'findLastIndex',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#findLastIndex'
    }
  },
  {
    type: 'List',
    action: 'know if a condition is satisfied by all of the values',
    func: {
      name: 'all',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#all'
    }
  },
  {
    type: 'List',
    action: 'know if a condition is satisfied by any of the values',
    func: {
      name: 'any',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#any'
    }
  },
  {
    type: 'List',
    action: 'know if a condition is satisfied by none of the values',
    func: {
      name: 'none',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#none'
    }
  },
  {
    type: 'List',
    action: 'replace a value at a specific index',
    func: {
      name: 'update',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#update'
    }
  },
  {
    type: 'List',
    action: 'replace a value at a specific index based on custom logic',
    func: {
      name: 'adjust/lensPath',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#lensPath'
    }
  },
  {
    type: 'List',
    action: 'add a value at the start',
    func: {
      name: 'prepend',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#prepend'
    }
  },
  {
    type: 'List',
    action: 'add a value at the end',
    func: {
      name: 'append',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#append'
    }
  },
  {
    type: 'List',
    action: 'add a value at a specific index',
    func: {
      name: 'insert',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#insert'
    }
  },
  {
    type: 'List',
    action: 'add multiple values at a specific index',
    func: {
      name: 'insertAll',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#insertAll'
    }
  },
  {
    type: 'List',
    action: 'group values based on custom logic',
    func: {
      name: 'groupBy',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#groupBy'
    }
  },
  {
    type: 'List',
    action: 'know how many values it contains',
    func: {
      name: 'length',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#length'
    }
  },
  {
    type: 'List',
    action: 'get a specific range of integer values',
    func: {
      name: 'range',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#range'
    }
  },
  {
    type: 'List',
    action: 'split at a specific index',
    func: {
      name: 'splitAt',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#splitAt'
    }
  },
  {
    type: 'List',
    action: 'split based on custom logic',
    func: {
      name: 'splitWhen',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#splitWhen'
    }
  },
  {
    type: 'List',
    action: 'split into chunks of a specific length',
    func: {
      name: 'splitEvery',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#splitEvery'
    }
  },
  {
    type: 'List',
    action: 'reverse',
    func: {
      name: 'reverse',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#reverse'
    }
  },
  {
    type: 'List',
    action: 'sort',
    func: {
      name: 'sort',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#sort'
    }
  },
  {
    type: 'List',
    action: 'sort based on custom logic',
    func: {
      name: 'sortBy',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#sortBy'
    }
  },
  {
    type: 'List',
    action: 'concatenate two lists',
    func: {
      name: 'concat',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#concat'
    }
  },
  {
    type: 'List',
    action: 'find the common values in two lists',
    func: {
      name: 'intersection',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#intersection'
    }
  },
  {
    type: 'List',
    action: 'find the common values in two lists based on custom logic',
    func: {
      name: 'intersectionWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#intersectionWith'
    }
  },
  {
    type: 'List',
    action: 'find the distinct values compared to another list',
    func: {
      name: 'difference',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#difference'
    }
  },
  {
    type: 'List',
    action:
      'find the distinct values compared to another list based on custom logic',
    func: {
      name: 'differenceWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#differenceWith'
    }
  },
  {
    type: 'List',
    action: 'combine two lists into a list of unique values',
    func: {
      name: 'union',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#union'
    }
  },
  {
    type: 'List',
    action:
      'combine two lists into a list of unique values based on custom logic',
    func: {
      name: 'unionWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#unionWith'
    }
  },
  {
    type: 'List',
    action: 'combine two lists into a list of pairs',
    func: {
      name: 'zip',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#zip'
    }
  },
  {
    type: 'List',
    action: 'combine two lists into a list of pairs based on custom logic',
    func: {
      name: 'zipWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#zipWith'
    }
  },
  {
    type: 'List',
    action: 'convert list of objects into one object',
    func: {
      name: 'indexBy',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#indexBy'
    }
  },
  {
    type: 'List',
    action:
      'split a list into two sub lists based on a single predicate function',
    func: {
      name: 'partition',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#partition'
    }
  },
  {
    type: 'Object',
    action: `change every value`,
    func: { name: 'map/mapObjIndexed', resouce: '' }
  },
  {
    type: 'Object',
    action: `select a specific key's value`,
    func: { name: 'prop/path', resouce: '' }
  },
  {
    type: 'Object',
    action: `select a specific key's value or return a default if it is not found`,
    func: { name: 'propOr/pathOr', resouce: '' }
  },
  {
    type: 'Object',
    action: `select specific keys' values`,
    func: { name: 'props', resouce: '' }
  },
  {
    type: 'Object',
    action: `select specific keys`,
    func: { name: 'pick/pickAll', resouce: '' }
  },
  {
    type: 'Object',
    action: `select keys based on custom logic`,
    func: { name: 'filter/pickBy', resouce: '' }
  },
  {
    type: 'Object',
    action: `remove a specific key`,
    func: { name: 'dissoc/dissocPath', resouce: '' }
  },
  {
    type: 'Object',
    action: `remove specific keys`,
    func: { name: 'omit', resouce: '' }
  },
  {
    type: 'Object',
    action: `remove specific keys based on custom logic`,
    func: { name: 'reject', resouce: '' }
  },
  {
    type: 'Object',
    action: `add a specific key and value`,
    func: { name: 'assoc/assocPath', resouce: '' }
  },
  {
    type: 'Object',
    action: `replace a specific value based on custom logic`,
    func: { name: 'lens/lensProp/lensPath', resouce: '' }
  },
  {
    type: 'Object',
    action: `replace specific values based on custom logic`,
    func: { name: 'evolve', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if a specific key is present`,
    func: { name: 'has/hasIn', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if a specific key has a specific value`,
    func: { name: 'propEq/pathEq', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if a specific key's value satisfies a custom predicate`,
    func: { name: 'propSatisfies/pathSatisfies', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if specific keys have specific values`,
    func: { name: 'whereEq', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if specific keys' values satisfy custom predicates`,
    func: { name: 'where', resouce: '' }
  },
  {
    type: 'Object',
    action: `list all the keys`,
    func: { name: 'keys/keysIn', resouce: '' }
  },
  {
    type: 'Object',
    action: `list all the values`,
    func: { name: 'values/valuesIn', resouce: '' }
  },
  {
    type: 'Object',
    action: `convert to a list of pairs`,
    func: { name: 'toPairs/toPairsIn', resouce: '' }
  },
  {
    type: 'Object',
    action: `know if two objects share the same key and value`,
    func: { name: 'eqProps', resouce: '' }
  },
  {
    type: 'Object',
    action: `create an object with a single key and value`,
    func: { name: 'objOf', resouce: '' }
  },
  {
    type: 'Object',
    action: `create an object with multiple keys and values`,
    func: { name: 'zipObj', resouce: '' }
  },
  {
    type: 'Object',
    action: `clone an object`,
    func: { name: 'clone', resouce: '' }
  },
  {
    type: 'Object',
    action: `merge two objects into one object`,
    func: { name: 'merge', resouce: '' }
  },
  {
    type: 'Object',
    action: `merge two objects into one object based on custom duplicate key logic`,
    func: { name: 'mergeWith', resouce: '' }
  },
  {
    type: 'Object',
    action: `merge more than two objects into one object`,
    func: { name: 'mergeAll', resouce: '' }
  },
  {
    type: 'Functions',
    action: `combine functions`,
    func: {
      name: 'compose/pipe',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#pipe'
    }
  },
  {
    type: 'Functions',
    action: `combine promise returning functions`,
    func: {
      name: 'composeP/pipeP',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#pipeP'
    }
  },
  {
    type: 'Functions',
    action: `curry a function`,
    func: {
      name: 'curry',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#curry'
    }
  },
  {
    type: 'Functions',
    action: `partially apply a function`,
    func: {
      name: 'partial/partialRight',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#partialRight'
    }
  },
  {
    type: 'Functions',
    action: `uncurry a function`,
    func: {
      name: 'uncurry',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#uncurry'
    }
  },
  {
    type: 'Functions',
    action: `swap the argument order`,
    func: {
      name: 'flip',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#flip'
    }
  },
  {
    type: 'Functions',
    action: `apply a list of arguments`,
    func: {
      name: 'apply',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#apply'
    }
  },
  {
    type: 'Functions',
    action: `apply multiple functions to a single value and merge the results somehow`,
    func: {
      name: 'converge',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#converge'
    }
  },
  {
    type: 'Functions',
    action: `transform a function's arguments`,
    func: {
      name: 'useWith',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#useWith'
    }
  },
  {
    type: 'Functions',
    action: `apply a list of functions to each argument and collect the results`,
    func: {
      name: 'juxt',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#juxt'
    }
  },
  {
    type: 'Functions',
    action: `create a variadic function from one that takes an array`,
    func: {
      name: 'unapply',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#unapply'
    }
  },
  {
    type: 'Functions',
    action: `restrict the number of accepted arguments to 1`,
    func: {
      name: 'unary',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#unary'
    }
  },
  {
    type: 'Functions',
    action: `restrict the number of accepted arguments to 2`,
    func: {
      name: 'binary',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#binary'
    }
  },
  {
    type: 'Functions',
    action: `restrict the number of accepted arguments to specific number`,
    func: {
      name: 'nAry',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#nAry'
    }
  },
  {
    type: 'Functions',
    action: `return the supplied argument unchanged`,
    func: {
      name: 'identity',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#identity'
    }
  },
  {
    type: 'Functions',
    action: `turn a method into a function`,
    func: {
      name: 'invoker',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#invoker'
    }
  },
  {
    type: 'Functions',
    action: `invoke a function only once`,
    func: {
      name: 'once',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#once'
    }
  },
  {
    type: 'Functions',
    action: `inspect values without affecting them`,
    func: {
      name: 'tap',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#tap'
    }
  },
  {
    type: 'Functions',
    action: `bind to a specific context`,
    func: {
      name: 'bind',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#bind'
    }
  },
  {
    type: 'Functions',
    action: `lift a function`,
    func: {
      name: 'lift/liftN',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#liftN'
    }
  },
  {
    type: 'Functions',
    action: `memoize`,
    func: {
      name: 'memoize',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#memoize'
    }
  },
  {
    type: 'Logic',
    action: `apply a function based on conditional logic`,
    func: {
      name: 'ifElse / cond / unless / when',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#when'
    }
  },
  {
    type: 'Logic',
    action: `negate a value`,
    func: {
      name: 'not',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#not'
    }
  },
  {
    type: 'Logic',
    action: `know if either of two values are truthy`,
    func: {
      name: 'or',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#or'
    }
  },
  {
    type: 'Logic',
    action: `know if two values are truthy`,
    func: {
      name: 'and',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#and'
    }
  },
  {
    type: 'Logic',
    action: `invert a predicate function`,
    func: {
      name: 'complement',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#complement'
    }
  },
  {
    type: 'Logic',
    action: `know if a value satisfies at least one of two predicates`,
    func: {
      name: 'either',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#either'
    }
  },
  {
    type: 'Logic',
    action: `know if a value satisfies two predicates`,
    func: {
      name: 'both',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#both'
    }
  },
  {
    type: 'Logic',
    action: `know if a value satisfies at least one of a list of predicates`,
    func: {
      name: 'anyPass',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#anyPass'
    }
  },
  {
    type: 'Logic',
    action: `know if a value satisfies at every one of a list of predicates`,
    func: {
      name: 'allPass',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#allPass'
    }
  },
  {
    type: 'Logic',
    action: `produce an empty value`,
    func: {
      name: 'empty',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#empty'
    }
  },
  {
    type: 'Logic',
    action: `know if a value is empty`,
    func: {
      name: 'isEmpty',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#isEmpty'
    }
  },

  {
    type: 'Relation',
    action: `compare for value equality`,
    func: {
      name: 'equals',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#equals'
    }
  },
  {
    type: 'Relation',
    action: `compare for reference equality`,
    func: {
      name: 'identical',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#identical'
    }
  },
  {
    type: 'Relation',
    action: `know if a value is less than another`,
    func: {
      name: 'lt',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#lt'
    }
  },
  {
    type: 'Relation',
    action: `know if a value is less than or equal to another`,
    func: {
      name: 'lte',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#lte'
    }
  },
  {
    type: 'Relation',
    action: `know if a value is greater than another`,
    func: {
      name: 'gt',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#gt'
    }
  },
  {
    type: 'Relation',
    action: `know if a value is greater than or equal to another`,
    func: {
      name: 'gte',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#gte'
    }
  },
  {
    type: 'Relation',
    action: `find the smallest of two values`,
    func: {
      name: 'min',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#min'
    }
  },
  {
    type: 'Relation',
    action: `find the smallest of two values based on custom logic`,
    func: {
      name: 'minBy',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#minBy'
    }
  },
  {
    type: 'Relation',
    action: `find the largest of two values`,
    func: {
      name: 'max',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#max'
    }
  },
  {
    type: 'Relation',
    action: `find the largest of two values based on custom logic`,
    func: {
      name: 'maxBy',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#maxBy'
    }
  },
  {
    type: 'Maths',
    action: `increment a number by one`,
    func: {
      name: 'inc',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#inc'
    }
  },
  {
    type: 'Maths',
    action: `decrement a number by one`,
    func: {
      name: 'dec',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#dec'
    }
  },
  {
    type: 'Maths',
    action: `add two numbers`,
    func: {
      name: 'add',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#add'
    }
  },
  {
    type: 'Maths',
    action: `subtract one number from another`,
    func: {
      name: 'subtract',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#subtract'
    }
  },
  {
    type: 'Maths',
    action: `multiple two numbers`,
    func: {
      name: 'multiply',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#multiply'
    }
  },
  {
    type: 'Maths',
    action: `divide one number by another`,
    func: {
      name: 'divide',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#divide'
    }
  },
  {
    type: 'Maths',
    action: `negate a number`,
    func: {
      name: 'negate',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#negate'
    }
  },
  {
    type: 'Maths',
    action: `divide one number by another and get the remainder`,
    func: {
      name: 'modulo/mathMod',
      notation: '',
      description: '',
      resource: 'https://ramdajs.com/docs/#mathMod'
    }
  }
]

export default Types
