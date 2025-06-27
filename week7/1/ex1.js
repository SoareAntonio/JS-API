// Creează un script care:
// 1. Afișează informații despre sistemul tău
// 2. Afișează statistici despre procesul curent
// 3. Procesează argumentele din linia de comandă

const os = require('os');

const createSystemReport = () => {
  const systemInfo = {
    // Ce informații vrei să incluzi?
    timestamp: new Date().toISOString(),
    platform: os.platform(),
    architecture: os.arch(),
    nodeVersion: process.version,
    totalMemory:Math.round(os.totalmem()/1024/1024),
    freeMemory:Math.round(os.freemem()/1024/1024),
    cpuCount:os.cpus().length,
    uptime:Math.round(process.uptime()),
  }
  //Procesarea argumentelor
  const args=process.argv.slice(2);
  const isVerbose=args.includes('--verbose') || args.includes('-v');

  console.log('🖥️  System Report');
  console.log('================')

  if(isVerbose){
    //afisare detaliata
    Object.entries(systemInfo).forEach(([key , value]) => {
      console.log(`${key}:${value}`);
    })
  }else{
    console.log(`Platform: ${systemInfo.platform}`)
    console.log(`Node.js: ${systemInfo.nodeVersion}`)
    console.log(`Memory: ${systemInfo.freeMemory}/${systemInfo.totalMemory} MB`)
  }
  if(args.length === 0){
    console.log('\\n💡 Tip: Folosește --verbose pentru mai multe detalii');
  }
}

createSystemReport()
