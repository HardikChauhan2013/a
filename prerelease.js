const fs = require('fs');

const packageJson = require('./package.json')
let { version } = packageJson;

let versionSplit = version.split('.');

versionSplit[versionSplit.length - 1] = parseInt(versionSplit[versionSplit.length - 1]) + 1

const newVersion = versionSplit.join(".")

console.log(newVersion)

packageJson.version = newVersion;

fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), (err) => {
    if (err)
        console.error(err)
})