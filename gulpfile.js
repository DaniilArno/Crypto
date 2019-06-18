'use strict';

let syntax = 'scss'; // Syntax: sass or scss;

let gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    nunjucksRender  = require('gulp-nunjucks-render'),
    data            = require('gulp-data'),
    autoprefixer    = require('gulp-autoprefixer'),
    notify          = require("gulp-notify");



gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        ghostMode: false,
        host: "192.168.5.162",
        // port: "3000",
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});


gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/njk/pages/**/*.+(html|njk)')
        .pipe(data(function() {
            return require('./app/data.json')
        }))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/njk/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream())

});


gulp.task('watch', ['sass', 'nunjucks', 'browser-sync'], function() {
    gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['sass']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/njk/**/*.njk', ['nunjucks']);
    gulp.watch('app/*.html', browserSync.reload);

});


gulp.task('build_oc', function () {
    var oc_theme_name = 'kakadu_v02'
    gulp.src([
        'app/css/**/*',
        'app/scss/**/*'
    ])
        .pipe(gulp.dest(oc_theme_name + '/stylesheet'))

    gulp.src([
        'app/img/**/*'
    ])
        .pipe(gulp.dest(oc_theme_name + '/image'))

    gulp.src([
        'app/*.html'
    ])
        .pipe(gulp.dest(oc_theme_name + '/template'))


});

gulp.task('default', ['watch']);















