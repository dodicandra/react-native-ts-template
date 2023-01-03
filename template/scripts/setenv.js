const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const path = require('path');

const envPath = path.resolve(__dirname, '../config/env.ts');

fs.readFile(path.resolve(__dirname, '../config/envkey.json'), 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  /**
   * @type {import('../config/envkey.json')}
   */
  const configs = JSON.parse(data);
  const {name} = args;
  configs.forEach(config => {
    if (config.NAME === name) {
      if (fs.existsSync(envPath)) {
        const fd = fs.openSync(envPath, 'w');
        Object.keys(config).forEach(key => {
          const isPick = key.includes('NAME') ? key : undefined;
          const union = isPick ? configs.map(item => `'${item[key]}'`).join(' | ') : '';
          fs.writeSync(fd, `export const ${key} = '${config[key]}' as ${isPick ? union : typeof config[key]};\n`);
        });
        fs.closeSync(fd);
      } else {
        const fd = fs.openSync(envPath, 'w');
        Object.keys(config).forEach(key => {
          const isPick = key.includes('NAME') ? key : undefined;
          const union = isPick ? configs.map(item => `'${item[key]}'`).join(' | ') : '';
          fs.writeFileSync(fd, `export const ${key} = '${config[key]}' as ${isPick ? union : typeof config[key]};\n`);
        });
        fs.closeSync(fd);
      }
      console.log(`Config Set to ${config.NAME}`);
    }
  });
});
