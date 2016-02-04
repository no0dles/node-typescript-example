var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var install = require("gulp-install");

var tsConfig = require("./tsconfig.json")["compilerOptions"];

gulp.task('clean', ['clean-client', 'clean-server']);
gulp.task('build', ['build-client', 'build-server']);
gulp.task('develop', ['watch', 'run-server']);

gulp.task('install', function() {
    return gulp.src(['./bower.json', './tsd.json'])
      .pipe(install());
});

gulp.task('clean-client', function () {
  return gulp.src('public/dist/*', {read: false})
    .pipe(clean());
});

gulp.task('clean-server', function () {
  return gulp.src('bin/dist/*', {read: false})
    .pipe(clean());
});

gulp.task('build-client', function() {
  return gulp.src(['public/**/*.ts', 'typings/**/*.ts'])
    .pipe(ts(tsConfig))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('build-server', function() {
  return gulp.src(['app/**/*.ts', '!app/test/**/*.ts', 'typings/**/*.ts'])
    .pipe(ts(tsConfig))
    .pipe(gulp.dest('bin'));
});

gulp.task('build-server-test', function() {
  return gulp.src(['app/**/*.ts', 'typings/**/*.ts'])
    .pipe(ts(tsConfig))
    .pipe(gulp.dest('bin'));
});

gulp.task('test-server', ['build-server-test'], function () {
  return gulp.src('bin/test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.ts', ['build-server']);
  gulp.watch('public/**/*.ts', ['build-client']);
});

gulp.task('run-server', function () {
  nodemon({
    script: 'bin/index.js',
    watch: 'bin',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  });
});