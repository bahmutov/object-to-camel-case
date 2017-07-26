'use strict'

/* global describe, it */
const objectToCamelCase = require('.')
const snapshot = require('snap-shot')

describe('object-to-camel-case', () => {
  it('changes an object', () => {
    const input = {
      foo_bar: 42
    }
    const output = objectToCamelCase(input)
    snapshot(output)
  })

  it('leaves camel cased properties unchanged', () => {
    const input = {
      fooBar: 42,
      baz_foo: 'value'
    }
    const output = objectToCamelCase(input)
    snapshot(output)
  })
})
