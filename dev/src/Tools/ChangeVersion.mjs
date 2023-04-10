import SystemInfo from '../../public/data/SystemInfo.mjs';
console.log('System info is ', SystemInfo);
const lastVersion = SystemInfo.version
const versions = lastVersion.split('.')
const lastThirdVersion = versions[2]
const newThirdVersion = Number(lastThirdVersion) + 1
console.log(newThirdVersion);
const newVersion = [...versions]
newVersion[2] = newThirdVersion
SystemInfo.version = newVersion.join('.')
console.log('New System info is ', JSON.stringify(SystemInfo, null, 2));

import fs from 'fs'
try {
  fs.writeFileSync('../../public/data/SystemInfo.mjs', JSON.stringify(SystemInfo, null, 2))
} catch (err) {
  console.error(err)
}

