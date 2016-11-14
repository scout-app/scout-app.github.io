// Includes - Defining what will be used below.
// These are pulled in from the node_modules folder.
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint')
var uglify = require('gulp-uglify');
var insert = require('gulp-insert');
var crlf = require ('gulp-line-ending-corrector');

// Basic error logging function to be used below
function errorLog (error) {
    console.error.bind(error);
    this.emit('end');
}

// Uglify JS - Targets all .js files in the _js folder and converts
// them to functionally identical code that uses less bytes in the _scripts folder
gulp.task('uglify', function () {
    gulp.src('_js/*.js')
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(insert.append('\n'))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_scripts'));
});

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sass', function () {
    gulp.src('_sass/style.scss')
        .pipe(sass({ outputStyle: 'expanded' })
        .on('error', sass.logError))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(rename('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(livereload());
});

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sassfold', function () {
    gulp.src('_sass/fold.scss')
        .pipe(sass({ outputStyle: 'expanded' })
        .on('error', sass.logError))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(rename('fold.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(livereload());
});

// Lint the main.js file to ensure code consistency and catch any errors
gulp.task('lint', function() {
    return gulp.src('_js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sasslint', function () {
  return gulp.src('_sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// Run a local server on port 8000
gulp.task('serve', function (done) {
    var express = require('express');
    var app = express();
    //path to the folder that will be served. __dirname is project root
    var path = __dirname;
    app.use(express.static(path));
    app.listen(8000, function () {
         done();
    });
});

// Enable live reload listening from HTML files in the browser
// if you have the LiveReload browser extension installed.
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(livereload());
});

// Watch for changes in JS, Sass, and HTML files, then Lint,
// Uglify, Process the Sass, and reload the browser automatically
gulp.task('watch', function () {
    gulp.watch('_js/*.js', ['lint']);
    gulp.watch('_js/*.js', ['uglify']);
    gulp.watch('_sass/*', ['sasslint', 'sass', 'sassfold']);
    gulp.watch('*.html', ['html']);

    livereload.listen();
});

// Automatically opens the local server in your default browser
gulp.task('open', function () {
    var url = 'http://localhost:8000';
    var OS = process.platform;
    var executable = '';

    //OS Specific values for opening files.
    if (OS == 'darwin') { executable = 'open "' + url + '"'; }
    if (OS == 'linux')  { executable = 'xdg-open ' + url;    }
    if (OS == 'win32')  { executable = 'explorer ' + url;    }

    //Run the OS specific command to open the url in the default browser
    require('child_process').exec(executable);
});

// The default Gulp task that happens when you run gulp.
// It runs all the other gulp tasks above in the correct order.
gulp.task('default', ['sasslint', 'sass', 'sassfold', 'lint', 'uglify', 'watch', 'serve', 'open']);
