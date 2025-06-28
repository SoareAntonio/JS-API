// tests/string-helper.test.js
import StringHelper from '../src/utils/string-helper.js'

// Testing framework simplu fără dependințe externe
import assert from 'assert'

const runTests = () => {
  console.log('Running StringHelper tests...')

  // Test capitalize
  assert.strictEqual(
    StringHelper.capitalize('hello'),
    'Hello',
    'capitalize should work for simple strings'
  )

  // Cum testezi edge cases?
  // - Empty strings
  // - null/undefined
  // - Special characters

  // Cum organizezi testele pentru coverage complet?
  console.log('All tests passed!')
}

// Cum integrezi testele în workflow-ul de dezvoltare?
// Ce script NPM adaugi pentru teste?
