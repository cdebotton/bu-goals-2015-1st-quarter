var pruno = require('pruno')
       .use(require('gulp'));

require('./mixes/jsWithGSLTask');

pruno(function(mix) {
  mix
    .configure({dir: __dirname + '/config'})
    .del()
    .publish('assets')
    .publish('fonts', {pkg: 'font-awesome', src: 'fonts/**/*', dist: '::dist/fonts'})
    .stylus()
    .jswithgsl({es6: true})
    .jade()
    .http();
});
