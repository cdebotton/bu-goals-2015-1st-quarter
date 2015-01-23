var pruno = require('pruno')
var assign = require('pruno/node_modules/object-assign');
var buffer = require('pruno/node_modules/vinyl-buffer');
var source = require('pruno/node_modules/vinyl-source-stream');
var browserify = require('pruno/node_modules/browserify');
var watchify = require('pruno/node_modules/watchify');
var shaderify = require('browserify-shader');
var envify = require('pruno/node_modules/envify/custom');
var to6ify = require('pruno/node_modules/6to5ify');
var gif = require('pruno/node_modules/gulp-if');
var guglify = require('pruno/node_modules/gulp-uglify');
var gsourcemaps = require('pruno/node_modules/gulp-sourcemaps');
var to5Runtime = require('pruno/dist/utils/addTo5Runtime');
var Notification = require('pruno/dist/utils/notification');
var koaServer = require('pruno/dist/utils/koaServer');



function JSWithGSLTask(params) {
  params || (params = {});
  this.params = params;
}

JSWithGSLTask.getDefaults = function() {
  return {
    'entry': '::src/index.js',
    'dist': '::dist/bundle.js',
    'uglify': false,
    'source-maps': true,
    'es6': false,
    'runtime': false
  };
};

JSWithGSLTask.prototype.enqueue = function(gulp, params) {
  params || (params = {});

  var args = assign({}, watchify.args, { entry: true, fullPaths: false });
  var bundler = transform(browserify(params.entry, args), params);

  return bundle(gulp, bundler, params);
};

JSWithGSLTask.prototype.generateWatcher = function(gulp, params) {
  return function() {
    var args = assign({}, watchify.args, {
      entry: true,
      fullPaths: true,
      debug: true
    });

    var bundler = transform(watchify(browserify(params.entry, args)), params);
    bundler.on('update', bundle.bind(bundle, gulp, bundler, params));

    return bundle(gulp, bundler, params);
  }
};

var onError = function(e) {
  new Notification().error(e, 'Browserify Compilation Failed!');
  this.emit('end');
};

var bundle = function(gulp, bundler, params) {
  params || (params = {});
  var path = params.dist.split('/');
  var fileName = path.pop();
  var dist = path.join('/');

  new Notification().message('Task ' + params.taskName + 'started!');

  return bundler.bundle()
    .on('error', onError)
    .pipe(source(fileName))
    .pipe(buffer())
    .pipe(
      gif(
        params.uglify, guglify()
      )
    )
    .pipe(
      gif(
        params['source-maps'], gsourcemaps.init({loadMaps: true})
      )
    )
    .pipe(
      gif(
        params['source-maps'], gsourcemaps.write()
      )
    )
    .pipe(gulp.dest(dist))
    .pipe(new Notification().message('Task ' + params.taskName + ' completed!'));
};

function transform(bundler, params) {
  if (params.runtime) {
    bundler.transform(to5Runtime);
  }

  bundler.transform(envify({NODE_ENV: 'development'}));

  if (params.es6 || params.harmony || params.react) {
    bundler.transform(to6ify);
  }

  bundler.transform(shaderify);

  return bundler;
}

module.exports = pruno.extend(JSWithGSLTask);
