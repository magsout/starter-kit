var gulp   = require('gulp'),
cssnext    = require('gulp-cssnext'),
cssmin     = require('gulp-cssmin'),
plumber    = require("gulp-plumber"),
gutil      = require("gulp-util"),
imagemin   = require('gulp-imagemin'),
pngquant   = require('imagemin-pngquant'),
minifyCSS  = require('gulp-minify-css');

/* param --production*/
var options = require("minimist")(process.argv.slice(2))

/* gulp stylesheets or gulp stylesheets --production */
gulp.task("stylesheets", function() {
  return gulp.src("./assets/css/*.css")
  .pipe(options.production ? plumber() : gutil.noop())
  .pipe(cssnext({
    sourcemap : !options.production,
    features:{
      autoprefixer: {
        browsers: ['ff >= 20', 'ie >= 8', 'safari >= 5.1', 'opera >= 12', 'chrome >=20']
      },
      import: {
        path: ["node_modules"]
      }
    }
  }))
  .pipe(options.production ? minifyCSS({keepSpecialComments:0}) : gutil.noop())
  .pipe(gulp.dest("./assets/build/stylesheets"))
});

/* gulp imagemin  */
gulp.task('imagemin', function () {
  return gulp.src('./assets/images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./assets/images/'));
});

/* gulp */
gulp.task('default', function(){
  gulp.watch('./assets/css/**/*.css', ['stylesheets']).on('change', function(event) {
    console.log('File ' + event.path + ' was modified')
  });
});

/* gulp build */
gulp.task('build', [
  'stylesheets'
]);

/* gulp dist --production*/
gulp.task('dist', ['stylesheets', 'imagemin'], function() {});
