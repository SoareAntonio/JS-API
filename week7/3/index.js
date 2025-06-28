
import chalk from 'chalk';
import _ from 'lodash';

console.log(chalk.blue.bold('🚀 Demo NPM Packages\\n'))

// Testarea lodash
const numbers = [1, 2, 3, 4, 5]
const doubled = _.map(numbers, (n) => n * 2)
const sum = _.sum(numbers)
const shuffled = _.shuffle(numbers)

console.log(chalk.green('📊 Lodash Examples:'))
console.log(`Original: ${chalk.white(JSON.stringify(numbers))}`)
console.log(`Doubled: ${chalk.gray(JSON.stringify(doubled))}`)
console.log(`Sum: ${chalk.white(sum)}`)
console.log(`Shuffled: ${chalk.white(JSON.stringify(shuffled))}\\n`)

// Testarea chalk cu diferite stiluri
console.log(chalk.red('❌ Error message'))
console.log(chalk.green('✅ Success message'))
console.log(chalk.yellow('⚠️  Warning message'))
console.log(chalk.blue('ℹ️  Info message'))
console.log(chalk.magenta.bold.underline('🎨 Styled text\\n'))

// Exemple mai complexe
const users = [
  { name: 'Ana', age: 25, active: true },
  { name: 'Ion', age: 30, active: false },
  { name: 'Maria', age: 22, active: true },
]

const activeUsers = _.filter(users, 'active')
const userNames = _.map(users, 'name')
const groupedByAge = _.groupBy(users, (user) =>
  user.age > 25 ? 'senior' : 'junior'
)

console.log(chalk.cyan('👥 User Management Examples:'))
console.log(`Active users: ${chalk.white(JSON.stringify(activeUsers))}`)
console.log(`All names: ${chalk.white(JSON.stringify(userNames))}`)
console.log(`Grouped by age: ${chalk.blue(JSON.stringify(groupedByAge))}\\n`)

// Demonstrarea unor funcții utile
console.log(chalk.magenta('🔧 Utility Functions:'));
console.log(`Random number: ${chalk.white(_.random(1, 100))}`)
console.log(`Capitalized: ${chalk.white(_.capitalize('hello world'))}`)
//console.log(`Debounced function created: ${chalk.white('_.debounce(fn, 300)')}`)



function searchInput(text) {
  console.log(`🔍 Search triggered for: ${text} at ${new Date().toLocaleTimeString()}`);
}

// Creăm o versiune debounce a funcției
const debouncedSearch = _.debounce(searchInput, 1000); // 1000ms = 1 sec

// Simulăm un utilizator care tastează rapid:
const inputs = ['H', 'He', 'Hel', 'Hell', 'Hello'];

let index = 0;
const interval = setInterval(() => {
  if (index < inputs.length) {
    console.log(`⌨️  User typed: ${inputs[index]}`);
    debouncedSearch(inputs[index]);
    index++;
  } else {
    clearInterval(interval);
  }
}, 300); // Simulează tastarea la fiecare 300ms
