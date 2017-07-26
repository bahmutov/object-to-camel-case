'use strict'

const camelCase = require('lodash.camelcase')

function objectToCamelCase (object) {
  Object.keys(object).forEach(key => {
    const camelCased = camelCase(key)
    if (camelCased !== key) {
      object[camelCased] = object[key]
      delete object[key]
    }
  })
  return object
}

module.exports = objectToCamelCase
