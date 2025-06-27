// Creează un script "node-info.js" care:
// 1. Afișează toate informațiile importante despre Node.js
// 2. Afișează informații despre sistemul de operare
// 3. Procesează argumentele din linia de comandă

const os = require('os')

const generateNodeReport = () => {
  const args = process.argv.slice(2)

  // Help system
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
📋 Node Info - System Information Tool

Usage: node node-info.js [options]

Options:
  --help, -h      Show this help message
  --verbose, -v   Show detailed information
  --json          Output as JSON
  --system        Show only system info
  --process       Show only process info

Examples:
  node node-info.js
  node node-info.js --verbose
  node node-info.js --json
    `)
    return
  }

  const report = {
    nodeVersion: process.version,
    platform: process.platform,
    architecture: process.arch,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    systemMemory: {
      total: os.totalmem(),
      free: os.freemem(),
    },
    cpuCount: os.cpus().length,
  }

  const isVerbose = args.includes('--verbose') || args.includes('-v')
  const isJson = args.includes('--json')
  const showSystem = args.includes('--system')
  const showProcess = args.includes('--process')

  if (isJson) {
    console.log(JSON.stringify(report, null, 2))
    return
  }

  console.log('🚀 Node.js Information Report')
  console.log('============================')

  if (!showProcess) {
    console.log('\\n🖥️  System Information:')
    console.log(`Platform: ${report.platform}`)
    console.log(`Architecture: ${report.architecture}`)
    console.log(`CPUs: ${report.cpuCount}`)
    console.log(
      `Total Memory: ${Math.round(report.systemMemory.total / 1024 / 1024)} MB`
    )
    console.log(
      `Free Memory: ${Math.round(report.systemMemory.free / 1024 / 1024)} MB`
    )
  }

  if (!showSystem) {
    console.log('\\n⚙️  Process Information:')
    console.log(`Node.js Version: ${report.nodeVersion}`)
    console.log(`Process Uptime: ${Math.round(report.uptime)} seconds`)

    if (isVerbose) {
      console.log(`Process Memory:`)
      console.log(`  RSS: ${Math.round(report.memory.rss / 1024 / 1024)} MB`)
      console.log(
        `  Heap Used: ${Math.round(report.memory.heapUsed / 1024 / 1024)} MB`
      )
      console.log(
        `  Heap Total: ${Math.round(report.memory.heapTotal / 1024 / 1024)} MB`
      )
    }
  }

  console.log('\\n💡 Differences from browser:')
  console.log('✅ Access to system information')
  console.log('✅ Command line arguments')
  console.log('✅ Environment variables')
  console.log('✅ Process control')
  console.log('❌ No DOM access')
  console.log('❌ No localStorage')
}

generateNodeReport()

// Ce observi diferit față de browser:
// 1. Accesul la informații de sistem (CPU, memorie)
// 2. Argumentele din linia de comandă
// 3. Variabilele de mediu
// 4. Nu există window, document, localStorage
// 5. Poți crea scripturi executable

