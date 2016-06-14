var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin')
    replace = require('gulp-html-replace')
    rename = require('gulp-rename'),
    inlinesource = require('gulp-inline-source'),
    site = '';

gulp.task('build', ['scripts', 'styles','html']);
gulp.task('serve',['build','connect']);

gulp.task('scripts', function(){
  gulp.src('src/*/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.dirname += "/js";
      path.basename += ".min";
      path.extname = ".js"
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function(){
  gulp.src('src/*/*.css')
    .pipe(csso())
    .pipe(rename(function(path) {
      path.dirname += "/css";
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
    .pipe(inlinesource())
    .pipe(replace({
      'css':{
        src: ['css/normalize.min.css', 'css/icomoon.min.css', 'css/style.min.css', 'jasmine/lib/jasmine-2.1.2/jasmine.min.css'],
        tpl: '<link rel="stylesheet" href="%s">'
      }
      'js': {
        src: ['jasmine/lib/jasmine-2.1.2/jasmine.min.js', 'jasmine/lib/jasmine-2.1.2/jasmine-html.min.js', 'jasmine/lib/jasmine-2.1.2/boot.min.js',
              'js/app.min.js', 'jasmine/spec/feedreader.min.js'],
        tpl: '<script src="%s"></script>'
      }
    }))
    .pipe(htmlmin())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8000,
  });
});
