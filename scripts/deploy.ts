import * as FtpDeploy from 'ftp-deploy';
import { existsSync, readFileSync } from 'fs';
import * as colours from 'colors/safe';
import { IDeployEnvironment } from './deploy-environment';

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

const config: IDeployEnvironment = JSON.parse(readFileSync(`${__dirname}/deploy.${environment}.json`, 'utf8'));

// Override config with values from command line arguments
process.argv.slice(3).forEach(arg => {
  if (/.+:.+/.test(arg)) {
    const name = arg.substr(0, arg.indexOf(':'));
    const value = arg.substr(name.length + 1);
    switch (name.toLocaleLowerCase()) {
      case 'host':
        config.host = value;
        break;
      case 'user':
        config.user = value;
        break;
      case 'password':
        config.password = value;
        break;
      case 'port':
        config.port = parseInt(value, 10);
        break;
      case 'dir':
        config.remoteRoot = value;
        break;
    }
  }
});

const ftpDeploy = new FtpDeploy();

// Attempt deployment
console.log(colours.green(`Deploying to ${environment.toUpperCase()}`));
console.log(colours.yellow(`Host: ${config.host}:${config.port || 21}`));
console.log(colours.yellow(`Local root: ${config.localRoot}`));
console.log(colours.yellow(`Remote root: ${config.remoteRoot}`));
ftpDeploy.deploy(config)
  .then(() => console.error(colours.green('Deployment complete')))
  .catch(err => console.error(colours.red(`ERROR: ${err}`)));
