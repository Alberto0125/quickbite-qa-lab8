const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({testDir:'./tests',fullyParallel:false,reporter:[['list'],['html',{open:'never'}]],use:{baseURL:'http://127.0.0.1:3000',trace:'on',screenshot:'only-on-failure'},webServer:{command:'npm start',url:'http://127.0.0.1:3000',reuseExistingServer:!process.env.CI,timeout:30000}});
