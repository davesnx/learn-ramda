In order to keep an up-to-date documentation from ramda and be able to create the data structure that I need I run the following commands:

```sh
node --experimental-modules generate-jsdocs.mjs
# Generates jsdocs.json from 'node_modules/ramda/dist/ramda.js`
```

```sh
node --experimental-modules index.mjs
# Merges jsdocs.json and what-function-should-I-use-data into a reasonable json.
```
