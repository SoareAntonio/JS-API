import _ from 'lodash';
import chalk from 'chalk';

// Titlu demo
console.log(chalk.bgBlue.white.bold('\n🚀 Lodash Functions Demo\n'));

// 1. Manipulare array
const arr = [1, 2, 3, 4, 5];
console.log(chalk.yellow.bold('1. Array operations:'));
console.log('Original:', chalk.white(JSON.stringify(arr)));
console.log('Chunk (2):', chalk.green(JSON.stringify(_.chunk(arr, 2))));
console.log('Shuffle:', chalk.green(JSON.stringify(_.shuffle(arr))));
console.log('Unique:', chalk.green(JSON.stringify(_.uniq([1, 2, 2, 3, 4, 4, 5]))));
console.log('Sum:', chalk.green(_.sum(arr)) + '\n');

// 2. Manipulare obiecte
const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(chalk.yellow.bold('2. Object operations:'));
console.log('Original:', chalk.white(JSON.stringify(obj)));
console.log('Keys:', chalk.green(JSON.stringify(_.keys(obj))));
console.log('Values:', chalk.green(JSON.stringify(_.values(obj))));
console.log('Pick (a, c):', chalk.green(JSON.stringify(_.pick(obj, ['a', 'c']))));
console.log('Omit (b, d):', chalk.green(JSON.stringify(_.omit(obj, ['b', 'd']))));
console.log('Invert:', chalk.green(JSON.stringify(_.invert({ x: 'a', y: 'b' }))) + '\n');

// 3. String operations
const str = 'hello world from lodash';
console.log(chalk.yellow.bold('3. String operations:'));
console.log('Original:', chalk.white(str));
console.log('Capitalize:', chalk.green(_.capitalize(str)));
console.log('CamelCase:', chalk.green(_.camelCase(str)));
console.log('KebabCase:', chalk.green(_.kebabCase(str)));
console.log('SnakeCase:', chalk.green(_.snakeCase(str)) + '\n');

// 4. Math utilities
console.log(chalk.yellow.bold('4. Math utilities:'));
console.log('Random number (1-100):', chalk.green(_.random(1, 100)));
console.log('Clamp (between 5 and 10, value 12):', chalk.green(_.clamp(12, 5, 10)) + '\n');

// 5. Collections
const users = [
  { name: 'Ana', age: 25, active: true },
  { name: 'Ion', age: 30, active: false },
  { name: 'Maria', age: 22, active: true },
];
console.log(chalk.yellow.bold('5. Collections:'));
console.log('Users:', chalk.white(JSON.stringify(users)));
console.log('Filter active:', chalk.green(JSON.stringify(_.filter(users, 'active'))));
console.log('Map names:', chalk.green(JSON.stringify(_.map(users, 'name'))));
console.log('Group by active:', chalk.green(JSON.stringify(_.groupBy(users, 'active'))));
console.log('Sort by age:', chalk.green(JSON.stringify(_.sortBy(users, 'age'))) + '\n');

// Final
console.log(chalk.bgGreen.white.bold('🎉 Demo lodash cu chalk finalizat!\n'));
