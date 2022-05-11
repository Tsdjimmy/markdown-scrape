const { parse } = require('../src/parse')

const test = require('ava')
const { readFileSync } = require('fs')
const { join } = require('path')

const example1 = readFileSync(
  join(__dirname, 'fixtures', 'example1.md'),
  'utf8',
)

test('example1', (t) => {
  t.plan(1)
  const parsed = parse(example1)
  t.snapshot(parsed)
})
