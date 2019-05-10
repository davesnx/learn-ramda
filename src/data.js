export default [
  {
    type: 'list',
    action: 'change every value',
    func: [
      {
        name: 'map',
        notation: 'Functor f => (a -> b) -> f a -> f b',
        description:
          "Takes a function and\na [functor](https://github.com/fantasyland/fantasy-land#functor),\napplies the function to each of the functor's values, and returns\na functor of the same shape.\n\nRamda provides suitable `map` implementations for `Array` and `Object`,\nso this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n\nDispatches to the `map` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.\n\nAlso treats functions as functors and will compose them together.",
        resource: 'https://ramdajs.com/docs/#map',
        example: {
          code:
            '  const double = x => x * 2;\n  R.map(double, [1, 2, 3]);\n',
          output: '\n  [2, 4, 6]\n'
        }
      }
    ]
  },
  {
    type: 'list',
    action: 'pull a property off each value',
    func: [
      {
        name: 'pluck',
        resource: 'https://ramdajs.com/docs/#pluck'
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
        notation: 'Functor f => k -> f {k: v} -> f v',
        description:
          'Returns a new list by plucking the same named property off all objects in\nthe list supplied.\n\n`pluck` will work on\nany [functor](https://github.com/fantasyland/fantasy-land#functor) in\naddition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.',
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
        notation: 'Filterable f => (a -> Boolean) -> f a -> f a',
        description:
          'Takes a predicate and a `Filterable`, and returns a new filterable of the\nsame type containing the members of the given filterable which satisfy the\ngiven predicate. Filterable objects include plain objects or any object\nthat has a filter method such as `Array`.\n\nDispatches to the `filter` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Number -> Number -> [a] -> [a]',
        description:
          'Returns the elements of the given list or string (or object with a `slice`\nmethod) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n\nDispatches to the `slice` method of the third argument, if present.',
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
        notation: 'Number -> [a] -> [a]',
        description:
          'Returns the first `n` elements of the given list, string, or\ntransducer/transformer (or object with a `take` method).\n\nDispatches to the `take` method of the second argument, if present.',
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
        notation: '(a -> Boolean) -> [a] -> [a]',
        description:
          'Returns a new list containing the first `n` elements of a given list,\npassing each value to the supplied predicate function, and terminating when\nthe predicate function returns `false`. Excludes the element that caused the\npredicate function to fail. The predicate function is passed one argument:\n*(value)*.\n\nDispatches to the `takeWhile` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Number -> [a] -> [a]',
        description:
          'Returns a new list containing the last `n` elements of the given list.\nIf `n > list.length`, returns a list of `list.length` elements.',
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
        notation: '(a -> Boolean) -> [a] -> [a]',
        description:
          'Returns a new list containing the last `n` elements of a given list, passing\neach value to the supplied predicate function, and terminating when the\npredicate function returns `false`. Excludes the element that caused the\npredicate function to fail. The predicate function is passed one argument:\n*(value)*.',
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
        notation: '[a] -> [a]',
        description:
          'Returns all but the last element of the given list or string.',
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
        notation: '[a] -> [a] -> [a]',
        description:
          'Returns a new list without values in the first argument.\n[`R.equals`](#equals) is used to determine equality.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Filterable f => (a -> Boolean) -> f a -> f a',
        description:
          'The complement of [`filter`](#filter).\n\nActs as a transducer if a transformer is given in list position. Filterable\nobjects include plain objects or any object that has a filter method such\nas `Array`.',
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
        notation: '[a] -> [a]',
        description:
          'Returns a new list containing only one copy of each element in the original\nlist. [`R.equals`](#equals) is used to determine equality.',
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
        notation: '((a, a) -> Boolean) -> [a] -> [a]',
        description:
          'Returns a new list containing only one copy of each element in the original\nlist, based upon the value returned by applying the supplied predicate to\ntwo list elements. Prefers the first item if two items compare equal based\non the predicate.',
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
        notation: 'Number -> Number -> [a] -> [a]',
        description:
          'Removes the sub-list of `list` starting at index `start` and containing\n`count` elements. _Note that this is not destructive_: it returns a copy of\nthe list with the changes.\n<small>No lists have been harmed in the application of this function.</small>',
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
        notation: 'Number -> [a] -> [a]',
        description:
          'Returns all but the first `n` elements of the given list, string, or\ntransducer/transformer (or object with a `drop` method).\n\nDispatches to the `drop` method of the second argument, if present.',
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
        notation: '(a -> Boolean) -> [a] -> [a]',
        description:
          'Returns a new list excluding the leading elements of a given list which\nsatisfy the supplied predicate function. It passes each value to the supplied\npredicate function, skipping elements while the predicate function returns\n`true`. The predicate function is applied to one argument: *(value)*.\n\nDispatches to the `dropWhile` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Number -> [a] -> [a]',
        description:
          'Returns a list containing all but the last `n` elements of the given `list`.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '(a -> Boolean) -> [a] -> [a]',
        description:
          'Returns a new list excluding all the tailing elements of a given list which\nsatisfy the supplied predicate function. It passes each value from the right\nto the supplied predicate function, skipping elements until the predicate\nfunction returns a `falsy` value. The predicate function is applied to one argument:\n*(value)*.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '((a, b) -> a) -> a -> [b] -> a',
        description:
          "Returns a single item by iterating through the list, successively calling\nthe iterator function and passing it an accumulator value and the current\nvalue from the array, and then passing the result to the next call.\n\nThe iterator function receives two values: *(acc, value)*. It may use\n[`R.reduced`](#reduced) to shortcut the iteration.\n\nThe arguments' order of [`reduceRight`](#reduceRight)'s iterator function\nis *(value, acc)*.\n\nNote: `R.reduce` does not skip deleted or unassigned indices (sparse\narrays), unlike the native `Array.prototype.reduce` method. For more details\non this behavior, see:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n\nDispatches to the `reduce` method of the third argument, if present. When\ndoing so, it is up to the user to handle the [`R.reduced`](#reduced)\nshortcuting, as this is not implemented by `reduce`.",
        resource: 'https://ramdajs.com/docs/#reduce',
        example: {
          code: '',
          output: ''
        }
      },
      {
        name: 'reduceRight',
        notation: '((a, b) -> b) -> b -> [a] -> b',
        description:
          "Returns a single item by iterating through the list, successively calling\nthe iterator function and passing it an accumulator value and the current\nvalue from the array, and then passing the result to the next call.\n\nSimilar to [`reduce`](#reduce), except moves through the input list from the\nright to the left.\n\nThe iterator function receives two values: *(value, acc)*, while the arguments'\norder of `reduce`'s iterator function is *(acc, value)*.\n\nNote: `R.reduceRight` does not skip deleted or unassigned indices (sparse\narrays), unlike the native `Array.prototype.reduceRight` method. For more details\non this behavior, see:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description",
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
        notation: '((a, b) -> a) -> a -> [b] -> [a]',
        description:
          'Scan is similar to [`reduce`](#reduce), but returns a list of successively\nreduced values from the left',
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
        notation: '[a] -> a | Undefined',
        description:
          'Returns the first element of the given list or string. In some libraries\nthis function is named `first`.',
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
        notation: '[a] -> a | Undefined',
        description: 'Returns the last element of the given list or string.',
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
        notation: 'Number -> [a] -> a | Undefined',
        description:
          'Returns the nth element of the given list or string. If n is negative the\nelement at index length + n is returned.',
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
        notation: '(a -> Boolean) -> [a] -> a | undefined',
        description:
          'Returns the first element of the list which matches the predicate, or\n`undefined` if no element matches.\n\nDispatches to the `find` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '(a -> Boolean) -> [a] -> a | undefined',
        description:
          'Returns the last element of the list which matches the predicate, or\n`undefined` if no element matches.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'a -> [a] -> Number',
        description:
          'Returns the position of the first occurrence of an item in an array, or -1\nif the item is not included in the array. [`R.equals`](#equals) is used to\ndetermine equality.',
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
        notation: '(a -> Boolean) -> [a] -> Number',
        description:
          'Returns the index of the first element of the list which matches the\npredicate, or `-1` if no element matches.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'a -> [a] -> Number',
        description:
          'Returns the position of the last occurrence of an item in an array, or -1 if\nthe item is not included in the array. [`R.equals`](#equals) is used to\ndetermine equality.',
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
        notation: '(a -> Boolean) -> [a] -> Number',
        description:
          'Returns the index of the last element of the list which matches the\npredicate, or `-1` if no element matches.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '(a -> Boolean) -> [a] -> Boolean',
        description:
          "Returns `true` if all elements of the list match the predicate, `false` if\nthere are any that don't.\n\nDispatches to the `all` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
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
        notation: '(a -> Boolean) -> [a] -> Boolean',
        description:
          'Returns `true` if at least one of the elements of the list match the predicate,\n`false` otherwise.\n\nDispatches to the `any` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '(a -> Boolean) -> [a] -> Boolean',
        description:
          'Returns `true` if no elements of the list match the predicate, `false`\notherwise.\n\nDispatches to the `all` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Number -> a -> [a] -> [a]',
        description:
          'Returns a new copy of the array with the element at the provided index\nreplaced with the given value.',
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
        notation: 'Number -> (a -> a) -> [a] -> [a]',
        description:
          'Applies a function to the value at the given index of an array, returning a\nnew copy of the array with the element at the given index replaced with the\nresult of the function application.',
        resource: 'https://ramdajs.com/docs/#adjust'
      },
      {
        name: 'lensPath',
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
        notation: 'a -> [a] -> [a]',
        description:
          'Returns a new list with the given element at the front, followed by the\ncontents of the list.',
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
        notation: 'a -> [a] -> [a]',
        description:
          'Returns a new list containing the contents of the given list, followed by\nthe given element.',
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
        notation: 'Number -> a -> [a] -> [a]',
        description:
          'Inserts the supplied element into the list, at the specified `index`. _Note that\nthis is not destructive_: it returns a copy of the list with the changes.\n<small>No lists have been harmed in the application of this function.</small>',
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
        notation: 'Number -> [a] -> [a] -> [a]',
        description:
          'Inserts the sub-list into the list, at the specified `index`. _Note that this is not\ndestructive_: it returns a copy of the list with the changes.\n<small>No lists have been harmed in the application of this function.</small>',
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
        notation: '(a -> String) -> [a] -> {String: [a]}',
        description:
          'Splits a list into sub-lists stored in an object, based on the result of\ncalling a String-returning function on each element, and grouping the\nresults according to values returned.\n\nDispatches to the `groupBy` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: '[a] -> Number',
        description:
          'Returns the number of elements in the array by returning `list.length`.',
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
        notation: 'Number -> Number -> [Number]',
        description:
          'Returns a list of numbers from `from` (inclusive) to `to` (exclusive).',
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
        notation: 'Number -> [a] -> [[a], [a]]',
        description: 'Splits a given list or string at a given index.',
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
        notation: '(a -> Boolean) -> [a] -> [[a], [a]]',
        description:
          'Takes a list and a predicate and returns a pair of lists with the following properties:\n\n - the result of concatenating the two output lists is equivalent to the input list;\n - none of the elements of the first output list satisfies the predicate; and\n - if the second output list is non-empty, its first element satisfies the predicate.',
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
        notation: 'Number -> [a] -> [[a]]',
        description: 'Splits a collection into slices of the specified length.',
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
        notation: '[a] -> [a]',
        description:
          'Returns a new list or string with the elements or characters in reverse\norder.',
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
        notation: '((a, a) -> Number) -> [a] -> [a]',
        description:
          "Returns a copy of the list, sorted according to the comparator function,\nwhich should accept two values at a time and return a negative number if the\nfirst value is smaller, a positive number if it's larger, and zero if they\nare equal. Please note that this is a **copy** of the list. It does not\nmodify the original.",
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
        notation: '[a] -> [a] -> [a]',
        description:
          'Returns the result of concatenating the given lists or strings.\n\nNote: `R.concat` expects both arguments to be of the same type,\nunlike the native `Array.prototype.concat` method. It will throw\nan error if you `concat` an Array with a non-Array value.\n\nDispatches to the `concat` method of the first argument, if present.\nCan also concatenate two members of a [fantasy-land\ncompatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).',
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
        notation: '[a] -> [b] -> [[a,b]]',
        description:
          'Creates a new list out of the two supplied by pairing up equally-positioned\nitems from both lists. The returned list is truncated to the length of the\nshorter of the two input lists.\nNote: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.',
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
        notation: '((a, b) -> c) -> [a] -> [b] -> [c]',
        description:
          'Creates a new list out of the two supplied by applying the function to each\nequally-positioned pair in the lists. The returned list is truncated to the\nlength of the shorter of the two input lists.',
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
        notation: '(a -> String) -> [{k: v}] -> {k: {k: v}}',
        description:
          'Given a function that generates a key, turns a list of objects into an\nobject indexing the objects by the given key. Note that if multiple\nobjects generate the same value for the indexing key only the last value\nwill be included in the generated object.\n\nActs as a transducer if a transformer is given in list position.',
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
        notation: 'Filterable f => (a -> Boolean) -> f a -> [f a, f a]',
        description:
          'Takes a predicate and a list or other `Filterable` object and returns the\npair of filterable objects of the same type of elements which do and do not\nsatisfy, the predicate, respectively. Filterable objects include plain objects or any object\nthat has a filter method such as `Array`.',
        resource: 'https://ramdajs.com/docs/#partition'
      }
    ]
  },
  {
    type: 'object',
    action: 'change every value',
    func: [
      {
        name: 'map',
        resouce: 'https://ramdajs.com/docs/#map'
      },
      {
        name: 'mapObjIndexed',
        resouce: '#mapObjIndexed',
        description:
          'An Object-specific version of [`map`](#map). The function is applied to three\narguments: *(value, key, obj)*. If only the value is significant, use\n[`map`](#map) instead.',
        notation: '((*, String, Object) -> *) -> Object -> Object'
      }
    ]
  },
  {
    type: 'object',
    action: "select a specific key's value",
    func: [
      {
        name: 'prop',
        resouce: 'https://ramdajs.com/docs/#prop',
        description:
          'Returns a function that when supplied an object returns the indicated\nproperty of that object, if it exists.',
        notation: 's -> {s: a} -> a | Undefined'
      },
      {
        name: 'path',
        resouce: 'https://ramdajs.com/docs/#path',
        description: 'Retrieve the value at a given path.',
        notation: '[Idx] -> {a} -> a | Undefined'
      }
    ]
  },
  {
    type: 'object',
    action:
      "select a specific key's value or return a default if it is not found",
    func: [
      {
        name: 'propOr',
        resouce: '',
        description:
          'If the given, non-null object has an own property with the specified name,\nreturns the value of that property. Otherwise returns the provided default\nvalue.',
        notation: 'a -> String -> Object -> a'
      },
      {
        name: 'pathOr',
        resouce: '',
        description:
          'If the given, non-null object has a value at the given path, returns the\nvalue at that path. Otherwise returns the provided default value.',
        notation: 'a -> [Idx] -> {a} -> a'
      }
    ]
  },
  {
    type: 'object',
    action: "select specific keys' values",
    func: [
      {
        name: 'props',
        resouce: '',
        description:
          'Acts as multiple `prop`: array of keys in, array of values out. Preserves\norder.',
        notation: '[k] -> {k: v} -> [v]'
      }
    ]
  },
  {
    type: 'object',
    action: 'select specific keys',
    func: [
      {
        name: 'pick',
        resouce: '',
        description:
          'Returns a partial copy of an object containing only the keys specified. If\nthe key does not exist, the property is ignored.',
        notation: '[k] -> {k: v} -> {k: v}'
      },
      {
        name: 'pickAll',
        resouce: '',
        description:
          "Similar to `pick` except that this one includes a `key: undefined` pair for\nproperties that don't exist.",
        notation: '[k] -> {k: v} -> {k: v}'
      }
    ]
  },
  {
    type: 'object',
    action: 'select keys based on custom logic',
    func: [
      {
        name: 'filter',
        resouce: ''
      },
      {
        name: 'pickBy',
        resouce: '',
        description:
          'Returns a partial copy of an object containing only the keys that satisfy\nthe supplied predicate.',
        notation: '((v, k) -> Boolean) -> {k: v} -> {k: v}'
      }
    ]
  },
  {
    type: 'object',
    action: 'remove a specific key',
    func: [
      {
        name: 'dissoc',
        resouce: '',
        description:
          'Returns a new object that does not contain a `prop` property.',
        notation: 'String -> {k: v} -> {k: v}'
      },
      {
        name: 'dissocPath',
        resouce: '',
        description:
          'Makes a shallow clone of an object, omitting the property at the given path.\nNote that this copies and flattens prototype properties onto the new object\nas well. All non-primitive properties are copied by reference.',
        notation: '[Idx] -> {k: v} -> {k: v}'
      }
    ]
  },
  {
    type: 'object',
    action: 'remove specific keys',
    func: [
      {
        name: 'omit',
        resouce: '',
        description:
          'Returns a partial copy of an object omitting the keys specified.',
        notation: '[String] -> {String: *} -> {String: *}'
      }
    ]
  },
  {
    type: 'object',
    action: 'remove specific keys based on custom logic',
    func: [
      {
        name: 'reject',
        resouce: ''
      }
    ]
  },
  {
    type: 'object',
    action: 'add a specific key and value',
    func: [
      {
        name: 'assoc',
        resouce: '',
        description:
          'Makes a shallow clone of an object, setting or overriding the specified\nproperty with the given value. Note that this copies and flattens prototype\nproperties onto the new object as well. All non-primitive properties are\ncopied by reference.',
        notation: 'String -> a -> {k: v} -> {k: v}'
      },
      {
        name: 'assocPath',
        resouce: '',
        description:
          'Makes a shallow clone of an object, setting or overriding the nodes required\nto create the given path, and placing the specific value at the tail end of\nthat path. Note that this copies and flattens prototype properties onto the\nnew object as well. All non-primitive properties are copied by reference.',
        notation: '[Idx] -> a -> {a} -> {a}'
      }
    ]
  },
  {
    type: 'object',
    action: 'replace a specific value based on custom logic',
    func: [
      {
        name: 'lens',
        resouce: '',
        description:
          'Returns a lens for the given getter and setter functions. The getter "gets"\nthe value of the focus; the setter "sets" the value of the focus. The setter\nshould not mutate the data structure.',
        notation: '(s -> a) -> ((a, s) -> s) -> Lens s a'
      },
      {
        name: 'lensProp',
        resouce: '',
        description: 'Returns a lens whose focus is the specified property.',
        notation: 'String -> Lens s a'
      },
      {
        name: 'lensPath',
        resouce: '',
        description: 'Returns a lens whose focus is the specified path.',
        notation: '[Idx] -> Lens s a'
      }
    ]
  },
  {
    type: 'object',
    action: 'replace specific values based on custom logic',
    func: [
      {
        name: 'evolve',
        resouce: '',
        description:
          'Creates a new object by recursively evolving a shallow copy of `object`,\naccording to the `transformation` functions. All non-primitive properties\nare copied by reference.\n\nA `transformation` function will not be invoked if its corresponding key\ndoes not exist in the evolved object.',
        notation: '{k: (v -> v)} -> {k: v} -> {k: v}'
      }
    ]
  },
  {
    type: 'object',
    action: 'know if a specific key is present',
    func: [
      {
        name: 'has',
        resouce: '',
        description:
          'Returns whether or not an object has an own property with the specified name',
        notation: 's -> {s: x} -> Boolean'
      },
      {
        name: 'hasIn',
        resouce: '',
        description:
          'Returns whether or not an object or its prototype chain has a property with\nthe specified name',
        notation: 's -> {s: x} -> Boolean'
      }
    ]
  },
  {
    type: 'object',
    action: 'know if a specific key has a specific value',
    func: [
      {
        name: 'propEq',
        resouce: ''
      },
      {
        name: 'pathEq',
        resouce: ''
      }
    ]
  },
  {
    type: 'object',
    action: "know if a specific key's value satisfies a custom predicate",
    func: [
      {
        name: 'propSatisfies',
        resouce: ''
      },
      {
        name: 'pathSatisfies',
        resouce: ''
      }
    ]
  },
  {
    type: 'object',
    action: 'know if specific keys have specific values',
    func: [
      {
        name: 'whereEq',
        resouce: '',
        description:
          "Takes a spec object and a test object; returns true if the test satisfies\nthe spec, false otherwise. An object satisfies the spec if, for each of the\nspec's own properties, accessing that property of the object gives the same\nvalue (in [`R.equals`](#equals) terms) as accessing that property of the\nspec.\n\n`whereEq` is a specialization of [`where`](#where).",
        notation: '{String: *} -> {String: *} -> Boolean'
      }
    ]
  },
  {
    type: 'object',
    action: "know if specific keys' values satisfy custom predicates",
    func: [
      {
        name: 'where',
        resouce: '',
        description:
          "Takes a spec object and a test object; returns true if the test satisfies\nthe spec. Each of the spec's own properties must be a predicate function.\nEach predicate is applied to the value of the corresponding property of the\ntest object. `where` returns true if all the predicates return true, false\notherwise.\n\n`where` is well suited to declaratively expressing constraints for other\nfunctions such as [`filter`](#filter) and [`find`](#find).",
        notation: '{String: (* -> Boolean)} -> {String: *} -> Boolean'
      }
    ]
  },
  {
    type: 'object',
    action: 'list all the keys',
    func: [
      {
        name: 'keys',
        resouce: '',
        description:
          'Returns a list containing the names of all the enumerable own properties of\nthe supplied object.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.',
        notation: '{k: v} -> [k]'
      },
      {
        name: 'keysIn',
        resouce: '',
        description:
          'Returns a list containing the names of all the properties of the supplied\nobject, including prototype properties.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.',
        notation: '{k: v} -> [k]'
      }
    ]
  },
  {
    type: 'object',
    action: 'list all the values',
    func: [
      {
        name: 'values',
        resouce: '',
        description:
          'Returns a list of all the enumerable own properties of the supplied object.\nNote that the order of the output array is not guaranteed across different\nJS platforms.',
        notation: '{k: v} -> [v]'
      },
      {
        name: 'valuesIn',
        resouce: '',
        description:
          'Returns a list of all the properties, including prototype properties, of the\nsupplied object.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.',
        notation: '{k: v} -> [v]'
      }
    ]
  },
  {
    type: 'object',
    action: 'convert to a list of pairs',
    func: [
      {
        name: 'toPairs',
        resouce: '',
        description:
          "Converts an object into an array of key, value arrays. Only the object's\nown properties are used.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.",
        notation: '{String: *} -> [[String,*]]'
      },
      {
        name: 'toPairsIn',
        resouce: '',
        description:
          "Converts an object into an array of key, value arrays. The object's own\nproperties and prototype properties are used. Note that the order of the\noutput array is not guaranteed to be consistent across different JS\nplatforms.",
        notation: '{String: *} -> [[String,*]]'
      }
    ]
  },
  {
    type: 'object',
    action: 'know if two objects share the same key and value',
    func: [
      {
        name: 'eqProps',
        resouce: '',
        description:
          'Reports whether two objects have the same value, in [`R.equals`](#equals)\nterms, for the specified property. Useful as a curried predicate.',
        notation: 'k -> {k: v} -> {k: v} -> Boolean'
      }
    ]
  },
  {
    type: 'object',
    action: 'create an object with a single key and value',
    func: [
      {
        name: 'objOf',
        resouce: '',
        description: 'Creates an object containing a single key:value pair.',
        notation: 'String -> a -> {String:a}'
      }
    ]
  },
  {
    type: 'object',
    action: 'create an object with multiple keys and values',
    func: [
      {
        name: 'zipObj',
        resouce: ''
      }
    ]
  },
  {
    type: 'object',
    action: 'clone an object',
    func: [
      {
        name: 'clone',
        resouce: '',
        description:
          'Creates a deep copy of the value which may contain (nested) `Array`s and\n`Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are\nassigned by reference rather than copied\n\nDispatches to a `clone` method if present.',
        notation: '{*} -> {*}'
      }
    ]
  },
  {
    type: 'object',
    action: 'merge two objects into one object',
    func: [
      {
        name: 'merge',
        resouce: '',
        description:
          'Create a new object with the own properties of the first object merged with\nthe own properties of the second object. If a key exists in both objects,\nthe value from the second object will be used.',
        notation: '{k: v} -> {k: v} -> {k: v}'
      }
    ]
  },
  {
    type: 'object',
    action:
      'merge two objects into one object based on custom duplicate key logic',
    func: [
      {
        name: 'mergeWith',
        resouce: '',
        description:
          'Creates a new object with the own properties of the two provided objects. If\na key exists in both objects, the provided function is applied to the values\nassociated with the key in each object, with the result being used as the\nvalue associated with the key in the returned object.',
        notation: '((a, a) -> a) -> {a} -> {a} -> {a}'
      }
    ]
  },
  {
    type: 'object',
    action: 'merge more than two objects into one object',
    func: [
      {
        name: 'mergeAll',
        resouce: ''
      }
    ]
  },
  {
    type: 'function',
    action: 'combine functions',
    func: [
      {
        name: 'pipe',
        notation:
          '(((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)',
        description:
          'Performs left-to-right function composition. The leftmost function may have\nany arity; the remaining functions must be unary.\n\nIn some libraries this function is named `sequence`.\n\n**Note:** The result of pipe is not automatically curried.',
        resource: 'https://ramdajs.com/docs/#pipe'
      },
      {
        name: 'compose',
        notation:
          '((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)',
        description:
          'Performs right-to-left function composition. The rightmost function may have\nany arity; the remaining functions must be unary.\n\n**Note:** The result of compose is not automatically curried.',
        resource: 'https://ramdajs.com/docs/#compose'
      }
    ]
  },
  {
    type: 'function',
    action: 'combine promise returning functions',
    func: [
      {
        name: 'pipeP',
        notation:
          '((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)',
        description:
          'Performs left-to-right composition of one or more Promise-returning\nfunctions. The leftmost function may have any arity; the remaining functions\nmust be unary.',
        resource: 'https://ramdajs.com/docs/#pipeP'
      },
      {
        name: 'composeP',
        notation:
          '((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)',
        description:
          'Performs right-to-left composition of one or more Promise-returning\nfunctions. The rightmost function may have any arity; the remaining\nfunctions must be unary.',
        resource: 'https://ramdajs.com/docs/#composeP'
      }
    ]
  },
  {
    type: 'function',
    action: 'curry a function',
    func: [
      {
        name: 'curry',
        notation: '(* -> a) -> (* -> a)',
        description:
          'Returns a curried equivalent of the provided function. The curried function\nhas two unusual capabilities. First, its arguments needn\'t be provided one\nat a time. If `f` is a ternary function and `g` is `R.curry(f)`, the\nfollowing are equivalent:\n\n  - `g(1)(2)(3)`\n  - `g(1)(2, 3)`\n  - `g(1, 2)(3)`\n  - `g(1, 2, 3)`\n\nSecondly, the special placeholder value [`R.__`](#__) may be used to specify\n"gaps", allowing partial application of any combination of arguments,\nregardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\nthe following are equivalent:\n\n  - `g(1, 2, 3)`\n  - `g(_, 2, 3)(1)`\n  - `g(_, _, 3)(1)(2)`\n  - `g(_, _, 3)(1, 2)`\n  - `g(_, 2)(1)(3)`\n  - `g(_, 2)(1, 3)`\n  - `g(_, 2)(_, 3)(1)`',
        resource: 'https://ramdajs.com/docs/#curry'
      }
    ]
  },
  {
    type: 'function',
    action: 'partially apply a function',
    func: [
      {
        name: 'partialRight',
        notation:
          '((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)',
        description:
          'Takes a function `f` and a list of arguments, and returns a function `g`.\nWhen applied, `g` returns the result of applying `f` to the arguments\nprovided to `g` followed by the arguments provided initially.',
        resource: 'https://ramdajs.com/docs/#partialRight'
      },
      {
        name: 'partial',
        notation:
          '((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)',
        description:
          'Takes a function `f` and a list of arguments, and returns a function `g`.\nWhen applied, `g` returns the result of applying `f` to the arguments\nprovided initially followed by the arguments provided to `g`.',
        resource: 'https://ramdajs.com/docs/#partial'
      }
    ]
  },
  {
    type: 'function',
    action: 'uncurry a function',
    func: [
      {
        name: 'uncurry',
        resource: 'https://ramdajs.com/docs/#uncurry'
      }
    ]
  },
  {
    type: 'function',
    action: 'swap the argument order',
    func: [
      {
        name: 'flip',
        notation: '((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)',
        description:
          "Returns a new function much like the supplied one, except that the first two\narguments' order is reversed.",
        resource: 'https://ramdajs.com/docs/#flip'
      }
    ]
  },
  {
    type: 'function',
    action: 'apply a list of arguments',
    func: [
      {
        name: 'apply',
        notation: '(*... -> a) -> [*] -> a',
        description:
          'Applies function `fn` to the argument list `args`. This is useful for\ncreating a fixed-arity function from a variadic function. `fn` should be a\nbound function if context is significant.',
        resource: 'https://ramdajs.com/docs/#apply'
      }
    ]
  },
  {
    type: 'function',
    action:
      'apply multiple functions to a single value and merge the results somehow',
    func: [
      {
        name: 'converge',
        notation:
          '((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)',
        description:
          'Accepts a converging function and a list of branching functions and returns\na new function. The arity of the new function is the same as the arity of\nthe longest branching function. When invoked, this new function is applied\nto some arguments, and each branching function is applied to those same\narguments. The results of each branching function are passed as arguments\nto the converging function to produce the return value.',
        resource: 'https://ramdajs.com/docs/#converge'
      }
    ]
  },
  {
    type: 'function',
    action: "transform a function's arguments",
    func: [
      {
        name: 'useWith',
        notation:
          '((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)',
        description:
          "Accepts a function `fn` and a list of transformer functions and returns a\nnew curried function. When the new function is invoked, it calls the\nfunction `fn` with parameters consisting of the result of calling each\nsupplied handler on successive arguments to the new function.\n\nIf more arguments are passed to the returned function than transformer\nfunctions, those arguments are passed directly to `fn` as additional\nparameters. If you expect additional arguments that don't need to be\ntransformed, although you can ignore them, it's best to pass an identity\nfunction so that the new function reports the correct arity.",
        resource: 'https://ramdajs.com/docs/#useWith'
      }
    ]
  },
  {
    type: 'function',
    action:
      'apply a list of functions to each argument and collect the results',
    func: [
      {
        name: 'juxt',
        notation: '[(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])',
        description: 'juxt applies a list of functions to a list of values.',
        resource: 'https://ramdajs.com/docs/#juxt'
      }
    ]
  },
  {
    type: 'function',
    action: 'create a variadic function from one that takes an array',
    func: [
      {
        name: 'unapply',
        notation: '([*...] -> a) -> (*... -> a)',
        description:
          'Takes a function `fn`, which takes a single array argument, and returns a\nfunction which:\n\n  - takes any number of positional arguments;\n  - passes these arguments to `fn` as an array; and\n  - returns the result.\n\nIn other words, `R.unapply` derives a variadic function from a function which\ntakes an array. `R.unapply` is the inverse of [`R.apply`](#apply).',
        resource: 'https://ramdajs.com/docs/#unapply'
      }
    ]
  },
  {
    type: 'function',
    action: 'restrict the number of accepted arguments to 1',
    func: [
      {
        name: 'unary',
        notation: '(* -> b) -> (a -> b)',
        description:
          'Wraps a function of any arity (including nullary) in a function that accepts\nexactly 1 parameter. Any extraneous parameters will not be passed to the\nsupplied function.',
        resource: 'https://ramdajs.com/docs/#unary'
      }
    ]
  },
  {
    type: 'function',
    action: 'restrict the number of accepted arguments to 2',
    func: [
      {
        name: 'binary',
        notation: '(* -> c) -> (a, b -> c)',
        description:
          'Wraps a function of any arity (including nullary) in a function that accepts\nexactly 2 parameters. Any extraneous parameters will not be passed to the\nsupplied function.',
        resource: 'https://ramdajs.com/docs/#binary'
      }
    ]
  },
  {
    type: 'function',
    action: 'restrict the number of accepted arguments to specific number',
    func: [
      {
        name: 'nAry',
        notation: 'Number -> (* -> a) -> (* -> a)',
        description:
          'Wraps a function of any arity (including nullary) in a function that accepts\nexactly `n` parameters. Any extraneous parameters will not be passed to the\nsupplied function.',
        resource: 'https://ramdajs.com/docs/#nAry'
      }
    ]
  },
  {
    type: 'function',
    action: 'return the supplied argument unchanged',
    func: [
      {
        name: 'identity',
        notation: 'a -> a',
        description:
          'A function that does nothing but return the parameter supplied to it. Good\nas a default or placeholder function.',
        resource: 'https://ramdajs.com/docs/#identity'
      }
    ]
  },
  {
    type: 'function',
    action: 'turn a method into a function',
    func: [
      {
        name: 'invoker',
        notation: 'Number -> String -> (a -> b -> ... -> n -> Object -> *)',
        description:
          'Turns a named method with a specified arity into a function that can be\ncalled directly supplied with arguments and a target object.\n\nThe returned function is curried and accepts `arity + 1` parameters where\nthe final parameter is the target object.',
        resource: 'https://ramdajs.com/docs/#invoker'
      }
    ]
  },
  {
    type: 'function',
    action: 'invoke a function only once',
    func: [
      {
        name: 'once',
        notation: '(a... -> b) -> (a... -> b)',
        description:
          'Accepts a function `fn` and returns a function that guards invocation of\n`fn` such that `fn` can only ever be called once, no matter how many times\nthe returned function is invoked. The first value calculated is returned in\nsubsequent invocations.',
        resource: 'https://ramdajs.com/docs/#once'
      }
    ]
  },
  {
    type: 'function',
    action: 'inspect values without affecting them',
    func: [
      {
        name: 'tap',
        notation: '(a -> *) -> a -> a',
        description:
          'Runs the given function with the supplied object, then returns the object.\n\nActs as a transducer if a transformer is given as second parameter.',
        resource: 'https://ramdajs.com/docs/#tap'
      }
    ]
  },
  {
    type: 'function',
    action: 'bind to a specific context',
    func: [
      {
        name: 'bind',
        notation: '(* -> *) -> {*} -> (* -> *)',
        description:
          'Creates a function that is bound to a context.\nNote: `R.bind` does not provide the additional argument-binding capabilities of\n[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).',
        resource: 'https://ramdajs.com/docs/#bind'
      }
    ]
  },
  {
    type: 'function',
    action: 'lift a function',
    func: [
      {
        name: 'liftN',
        notation: 'Number -> (*... -> *) -> ([*]... -> [*])',
        description:
          '"lifts" a function to be the specified arity, so that it may "map over" that\nmany lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).',
        resource: 'https://ramdajs.com/docs/#liftN'
      },
      {
        name: 'lift',
        notation: '(*... -> *) -> ([*]... -> [*])',
        description:
          '"lifts" a function of arity > 1 so that it may "map over" a list, Function or other\nobject that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).',
        resource: 'https://ramdajs.com/docs/#lift'
      }
    ]
  },
  {
    type: 'function',
    action: 'memoize',
    func: [
      {
        name: 'memoize',
        resource: 'https://ramdajs.com/docs/#memoize'
      }
    ]
  },
  {
    type: 'logic',
    action: 'apply a function based on conditional logic',
    func: [
      {
        name: 'ifElse',
        notation:
          '(*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)',
        description:
          'Creates a function that will process either the `onTrue` or the `onFalse`\nfunction depending upon the result of the `condition` predicate.',
        resource: 'https://ramdajs.com/docs/#ifElse'
      },
      {
        name: 'cond',
        notation: '[[(*... -> Boolean),(*... -> *)]] -> (*... -> *)',
        description:
          'Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.\n`R.cond` takes a list of [predicate, transformer] pairs. All of the arguments\nto `fn` are applied to each of the predicates in turn until one returns a\n"truthy" value, at which point `fn` returns the result of applying its\narguments to the corresponding transformer. If none of the predicates\nmatches, `fn` returns undefined.',
        resource: 'https://ramdajs.com/docs/#cond'
      },
      {
        name: 'unless',
        notation: '(a -> Boolean) -> (a -> a) -> a -> a',
        description:
          'Tests the final argument by passing it to the given predicate function. If\nthe predicate is not satisfied, the function will return the result of\ncalling the `whenFalseFn` function with the same argument. If the predicate\nis satisfied, the argument is returned as is.',
        resource: 'https://ramdajs.com/docs/#unless'
      },
      {
        name: 'when',
        notation: '(a -> Boolean) -> (a -> a) -> a -> a',
        description:
          'Tests the final argument by passing it to the given predicate function. If\nthe predicate is satisfied, the function will return the result of calling\nthe `whenTrueFn` function with the same argument. If the predicate is not\nsatisfied, the argument is returned as is.',
        resource: 'https://ramdajs.com/docs/#when'
      }
    ]
  },
  {
    type: 'logic',
    action: 'negate a value',
    func: [
      {
        name: 'not',
        notation: '* -> Boolean',
        description:
          'A function that returns the `!` of its argument. It will return `true` when\npassed false-y value, and `false` when passed a truth-y one.',
        resource: 'https://ramdajs.com/docs/#not'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if either of two values are truthy',
    func: [
      {
        name: 'or',
        notation: 'a -> b -> a | b',
        description:
          'Returns `true` if one or both of its arguments are `true`. Returns `false`\nif both arguments are `false`.',
        resource: 'https://ramdajs.com/docs/#or'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if two values are truthy',
    func: [
      {
        name: 'and',
        notation: 'a -> b -> a | b',
        description:
          'Returns `true` if both arguments are `true`; `false` otherwise.',
        resource: 'https://ramdajs.com/docs/#and'
      }
    ]
  },
  {
    type: 'logic',
    action: 'invert a predicate function',
    func: [
      {
        name: 'complement',
        notation: '(*... -> *) -> (*... -> Boolean)',
        description:
          'Takes a function `f` and returns a function `g` such that if called with the same arguments\nwhen `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.\n\n`R.complement` may be applied to any functor',
        resource: 'https://ramdajs.com/docs/#complement'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if a value satisfies at least one of two predicates',
    func: [
      {
        name: 'either',
        notation: '(*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)',
        description:
          'A function wrapping calls to the two functions in an `||` operation,\nreturning the result of the first function if it is truth-y and the result\nof the second function otherwise. Note that this is short-circuited,\nmeaning that the second function will not be invoked if the first returns a\ntruth-y value.\n\nIn addition to functions, `R.either` also accepts any fantasy-land compatible\napplicative functor.',
        resource: 'https://ramdajs.com/docs/#either'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if a value satisfies two predicates',
    func: [
      {
        name: 'both',
        notation: '(*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)',
        description:
          'A function which calls the two provided functions and returns the `&&`\nof the results.\nIt returns the result of the first function if it is false-y and the result\nof the second function otherwise. Note that this is short-circuited,\nmeaning that the second function will not be invoked if the first returns a\nfalse-y value.\n\nIn addition to functions, `R.both` also accepts any fantasy-land compatible\napplicative functor.',
        resource: 'https://ramdajs.com/docs/#both'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if a value satisfies at least one of a list of predicates',
    func: [
      {
        name: 'anyPass',
        notation: '[(*... -> Boolean)] -> (*... -> Boolean)',
        description:
          'Takes a list of predicates and returns a predicate that returns true for a\ngiven list of arguments if at least one of the provided predicates is\nsatisfied by those arguments.\n\nThe function returned is a curried function whose arity matches that of the\nhighest-arity predicate.',
        resource: 'https://ramdajs.com/docs/#anyPass'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if a value satisfies at every one of a list of predicates',
    func: [
      {
        name: 'allPass',
        notation: '[(*... -> Boolean)] -> (*... -> Boolean)',
        description:
          'Takes a list of predicates and returns a predicate that returns true for a\ngiven list of arguments if every one of the provided predicates is satisfied\nby those arguments.\n\nThe function returned is a curried function whose arity matches that of the\nhighest-arity predicate.',
        resource: 'https://ramdajs.com/docs/#allPass'
      }
    ]
  },
  {
    type: 'logic',
    action: 'produce an empty value',
    func: [
      {
        name: 'empty',
        resource: 'https://ramdajs.com/docs/#empty'
      }
    ]
  },
  {
    type: 'logic',
    action: 'know if a value is empty',
    func: [
      {
        name: 'isEmpty',
        notation: 'a -> Boolean',
        description:
          "Returns `true` if the given value is its type's empty value; `false`\notherwise.",
        resource: 'https://ramdajs.com/docs/#isEmpty'
      }
    ]
  },
  {
    type: 'relation',
    action: 'compare for value equality',
    func: [
      {
        name: 'equals',
        notation: 'a -> b -> Boolean',
        description:
          'Returns `true` if its arguments are equivalent, `false` otherwise. Handles\ncyclical data structures.\n\nDispatches symmetrically to the `equals` methods of both arguments, if\npresent.',
        resource: 'https://ramdajs.com/docs/#equals'
      }
    ]
  },
  {
    type: 'relation',
    action: 'compare for reference equality',
    func: [
      {
        name: 'identical',
        notation: 'a -> a -> Boolean',
        description:
          'Returns true if its arguments are identical, false otherwise. Values are\nidentical if they reference the same memory. `NaN` is identical to `NaN`;\n`0` and `-0` are not identical.\n\nNote this is merely a curried version of ES6 `Object.is`.',
        resource: 'https://ramdajs.com/docs/#identical'
      }
    ]
  },
  {
    type: 'relation',
    action: 'know if a value is less than another',
    func: [
      {
        name: 'lt',
        notation: 'Ord a => a -> a -> Boolean',
        description:
          'Returns `true` if the first argument is less than the second; `false`\notherwise.',
        resource: 'https://ramdajs.com/docs/#lt'
      }
    ]
  },
  {
    type: 'relation',
    action: 'know if a value is less than or equal to another',
    func: [
      {
        name: 'lte',
        notation: 'Ord a => a -> a -> Boolean',
        description:
          'Returns `true` if the first argument is less than or equal to the second;\n`false` otherwise.',
        resource: 'https://ramdajs.com/docs/#lte'
      }
    ]
  },
  {
    type: 'relation',
    action: 'know if a value is greater than another',
    func: [
      {
        name: 'gt',
        notation: 'Ord a => a -> a -> Boolean',
        description:
          'Returns `true` if the first argument is greater than the second; `false`\notherwise.',
        resource: 'https://ramdajs.com/docs/#gt'
      }
    ]
  },
  {
    type: 'relation',
    action: 'know if a value is greater than or equal to another',
    func: [
      {
        name: 'gte',
        notation: 'Ord a => a -> a -> Boolean',
        description:
          'Returns `true` if the first argument is greater than or equal to the second;\n`false` otherwise.',
        resource: 'https://ramdajs.com/docs/#gte'
      }
    ]
  },
  {
    type: 'relation',
    action: 'find the smallest of two values',
    func: [
      {
        name: 'min',
        notation: 'Ord a => a -> a -> a',
        description: 'Returns the smaller of its two arguments.',
        resource: 'https://ramdajs.com/docs/#min'
      }
    ]
  },
  {
    type: 'relation',
    action: 'find the smallest of two values based on custom logic',
    func: [
      {
        name: 'minBy',
        notation: 'Ord b => (a -> b) -> a -> a -> a',
        description:
          'Takes a function and two values, and returns whichever value produces the\nsmaller result when passed to the provided function.',
        resource: 'https://ramdajs.com/docs/#minBy'
      }
    ]
  },
  {
    type: 'relation',
    action: 'find the largest of two values',
    func: [
      {
        name: 'max',
        notation: 'Ord a => a -> a -> a',
        description: 'Returns the larger of its two arguments.',
        resource: 'https://ramdajs.com/docs/#max'
      }
    ]
  },
  {
    type: 'relation',
    action: 'find the largest of two values based on custom logic',
    func: [
      {
        name: 'maxBy',
        notation: 'Ord b => (a -> b) -> a -> a -> a',
        description:
          'Takes a function and two values, and returns whichever value produces the\nlarger result when passed to the provided function.',
        resource: 'https://ramdajs.com/docs/#maxBy'
      }
    ]
  },
  {
    type: 'math',
    action: 'increment a number by one',
    func: [
      {
        name: 'inc',
        notation: 'Number -> Number',
        description: 'Increments its argument.',
        resource: 'https://ramdajs.com/docs/#inc'
      }
    ]
  },
  {
    type: 'math',
    action: 'decrement a number by one',
    func: [
      {
        name: 'dec',
        notation: 'Number -> Number',
        description: 'Decrements its argument.',
        resource: 'https://ramdajs.com/docs/#dec'
      }
    ]
  },
  {
    type: 'math',
    action: 'add two numbers',
    func: [
      {
        name: 'add',
        notation: 'Number -> Number -> Number',
        description: 'Adds two values.',
        resource: 'https://ramdajs.com/docs/#add'
      }
    ]
  },
  {
    type: 'math',
    action: 'subtract one number from another',
    func: [
      {
        name: 'subtract',
        notation: 'Number -> Number -> Number',
        description: 'Subtracts its second argument from its first argument.',
        resource: 'https://ramdajs.com/docs/#subtract'
      }
    ]
  },
  {
    type: 'math',
    action: 'multiple two numbers',
    func: [
      {
        name: 'multiply',
        notation: 'Number -> Number -> Number',
        description:
          'Multiplies two numbers. Equivalent to `a * b` but curried.',
        resource: 'https://ramdajs.com/docs/#multiply'
      }
    ]
  },
  {
    type: 'math',
    action: 'divide one number by another',
    func: [
      {
        name: 'divide',
        notation: 'Number -> Number -> Number',
        description: 'Divides two numbers. Equivalent to `a / b`.',
        resource: 'https://ramdajs.com/docs/#divide'
      }
    ]
  },
  {
    type: 'math',
    action: 'negate a number',
    func: [
      {
        name: 'negate',
        notation: 'Number -> Number',
        description: 'Negates its argument.',
        resource: 'https://ramdajs.com/docs/#negate'
      }
    ]
  },
  {
    type: 'math',
    action: 'divide one number by another and get the remainder',
    func: [
      {
        name: 'modulo',
        notation: 'Number -> Number -> Number',
        description:
          'Divides the first parameter by the second and returns the remainder. Note\nthat this function preserves the JavaScript-style behavior for modulo. For\nmathematical modulo see [`mathMod`](#mathMod).',
        resource: 'https://ramdajs.com/docs/#modulo'
      },
      {
        name: 'mathMod',
        notation: 'Number -> Number -> Number',
        description:
          '`mathMod` behaves like the modulo operator should mathematically, unlike the\n`%` operator (and by extension, [`R.modulo`](#modulo)). So while\n`-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer\narguments, and returns NaN when the modulus is zero or negative.',
        resource: 'https://ramdajs.com/docs/#mathMod'
      }
    ]
  }
]
