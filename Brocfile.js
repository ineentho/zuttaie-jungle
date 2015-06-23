var funnel      = require('broccoli-funnel'),
    mergeTrees  = require('broccoli-merge-trees'),
    es6Modules  = require('broccoli-es6modules'),
    compileJade = require('broccoli-jade'),
    compileStylus = require('broccoli-stylus-single');


var es6Files = new es6Modules('./app/js/', {
    format: 'amd',
    bundleOptions: {
        entry: 'main.js',
        name: 'scripts'
    }
});

var stylus = compileStylus('./app/styl/', 'main.styl', './main.css');

var jade = compileJade('./app/jade');

var screenshots = funnel('screenshots', {
    destDir: 'screenshots'
});


module.exports = mergeTrees([jade, screenshots, es6Files, stylus]);