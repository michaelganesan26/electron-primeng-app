//Test Code
 const env = require("env-variable")({
     foo: 'bar',
     NODE_ENV: 'production'
 });

 const colors = require('colors');

console.log(`${env.NODE_ENV}`);
console.log(`${colors.magenta(env.node_env)}`);







