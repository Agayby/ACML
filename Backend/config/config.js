let config = require('./config.json');

Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });