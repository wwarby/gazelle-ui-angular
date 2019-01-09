import * as FtpDeploy from 'ftp-deploy';
import { existsSync, readFileSync } from 'fs';
import * as colours from 'colors/safe';

if (process.argv.length < 4) {
  console.log(colours.green('Demo var: ' + process.argv[3]));
} else {
  console.log(colours.red('Demo var not found'));
}

if (process.argv.length < 3) {
  console.error(colours.red('ERROR: Deployment environment not specified'));
  process.exit(1);
}

const environment = process.argv[2];
const configPath = `${__dirname}/deploy.${environment}.json`;

if (!existsSync(configPath)) {
  console.error(colours.red(`ERROR: ${configPath} not found`));
  process.exit(1);
}

const config = JSON.parse(readFileSync(`${__dirname}/deploy.${environment}.json`, 'utf8'));
const ftpDeploy = new FtpDeploy();

// Attempt deployment
console.log(colours.green(`Deploying to ${environment.toUpperCase()}`));
console.log(colours.yellow(`Host: ${config.host}:${config.port || 21}`));
console.log(colours.yellow(`Local root: ${config.localRoot}`));
console.log(colours.yellow(`Remote root: ${config.remoteRoot}`));
ftpDeploy.deploy(config)
  .then(() => console.error(colours.green('Deployment complete')))
  .catch(err => console.error(colours.red(`ERROR: ${err}`)));
