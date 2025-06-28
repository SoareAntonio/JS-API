// tests/test-string-helper.js
import { capitalize, camelCase, slugify } from '../src/utils/string-helper.js'

console.log(`capitalize('hello'): "${capitalize('hello')}"`)
console.log(`capitalize('WORLD'): "${capitalize('WORLD')}"`)
console.log(`capitalize(null): "${capitalize(null)}"`)

console.log(`camelCase('hello world'): "${camelCase('hello world')}"`)
console.log(`camelCase('hello-world-test'): "${camelCase('hello-world-test')}"`)
console.log(`camelCase('hello_world_test'): "${camelCase('hello_world_test')}"`)

console.log(`slugify('Hello World!'): "${slugify('Hello World!')}"`)
console.log(`slugify('Café & Restaurant'): "${slugify('Café & Restaurant')}"`)
console.log(`slugify('DOM &  Node.js'): "${slugify('DOM &  Node.js')}"`)
