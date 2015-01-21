var pruno = require('pruno')
       .use(require('gulp'));

pruno(function(mix) {
  mix
    .configure({dir: __dirname + '/config'})
    .del()
    .publish({pkg: 'font-awesome', src: 'fonts/**/*', dist: '::dist/fonts'})
    .stylus()
    .js({es6: true})
    .jade()
    .http();
});
