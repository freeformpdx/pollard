var util = require('util');
var fs = require('fs')

var output;
var envTemplate = require('./.env.js');
var envOutputPath = './env.js';

// Reads in env template
// processes env template with exported (from build_env.sh) env vars
// writes to importable env.js file to be used when FE app is built w/ webpack

output = util.inspect(envTemplate, {depth: null});
output = 'module.exports = ' + output + ';\n';

// write env.js
fs.open(envOutputPath, 'w+', function(err, data) {
    if (err) {
        console.log("ERROR !! " + err);
    } else {
        fs.write(data, output, 0, 'utf8', function(err) {
            if (err)
                console.log("ERROR !! " + err);
            fs.close(data, function() {
                console.log('wrote ' + envOutputPath);
            })
        });
    }
});

// write ./env/[env].env.js
// which persists between builds
// so we can push it to da EC2 server
var ENV = process.env.ENV;
var prependedEnvOutputPath = "./env/" + ENV + ".env.js";

console.log(prependedEnvOutputPath);

fs.open(prependedEnvOutputPath, 'w+', function(err, data) {
    if (err) {
        console.log("ERROR !! " + err);
    } else {
        fs.write(data, output, 0, 'utf8', function(err) {
            if (err)
                console.log("ERROR !! " + err);
            fs.close(data, function() {
                console.log('wrote ' +prependedEnvOutputPath);
            })
        });
    }
});
