import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
const { inject } = require("./util/injection");
/**
 * client_module.js
 * the main function occurs as soon as the site loads in the browser
 */
const main = () => inject();  
if (ExecutionEnvironment.canUseDOM) main(); 