import SystemInfo from '../../public/data/SystemInfo.mjs';
console.log('System info is ', SystemInfo);
const lastVersion = SystemInfo.version
const versions = lastVersion.split('.')
const lastThirdVersion = versions[2]
const newThirdVersion = Number(lastThirdVersion) + 1
console.log(newThirdVersion);
