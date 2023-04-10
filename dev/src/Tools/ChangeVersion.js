const SystemInfo = require('../../public/data/SystemInfo.json');
// console.log('System info is ', SystemInfo);
const lastVersion = SystemInfo.version
const versions = lastVersion.split('.')
const lastThirdVersion = versions[2]
const newThirdVersion = Number(lastThirdVersion) + 1
// console.log(newThirdVersion);
const newVersion = [...versions]
newVersion[2] = newThirdVersion
SystemInfo.version = newVersion.join('.')
// console.log('New System info is ', JSON.stringify(SystemInfo, null, 2));

const fs = require('fs')
fs.writeFileSync('./public/data/SystemInfo.json', `${JSON.stringify(SystemInfo, null, 2)}`)
// fs.readdir('./', (...args) => {
//   console.log('list is ', ...args);
// })

