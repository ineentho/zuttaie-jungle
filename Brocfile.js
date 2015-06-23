var funnel      = require('broccoli-funnel'),
    compileJade = require('broccoli-jade'),
    mergeTrees  = require('broccoli-merge-trees'),
    es6Modules  = require('broccoli-es6modules');


var es6Files = new es6Modules('./app/js/', {
    format: 'amd',
    bundleOptions: {
        entry: 'main.js',
        name: 'scripts'
    }
});

jade = compileJade('./app/jade');

var screenshots = funnel('screenshots', {
    destDir: 'screenshots'
});


module.exports = mergeTrees([jade, screenshots, es6Files]);