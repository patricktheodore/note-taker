const chalk = require('chalk');

const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(chalk.greenBright(`${req.method} request to ${req.path}`));
        break;
      }
      case 'POST': {
        console.info(chalk.yellowBright(`${req.method} request to ${req.path}`));
        break;
      }
      default:
        console.log(chalk.redBright(`${req.method} request to ${req.path}`));
    }
  
    next();
  };
  
  exports.clog = clog;