var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var imagemin = require('gulp-imagemin');

//gulp -g, in case of error
//gulp --tasks lists all tasks
// gulp.task('task_jshint', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// });


//default task
// gulp.task('default', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// });


//create a task with new ver 4 syntex
// function task_jshint(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// };

// function task_jshint1(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// };


// //named task in version 4
// exports.task_jshint = task_jshint;

// //create default task in ver 4
// exports.default = task_jshint;

// //export more then one task
//  exports.default = gulp.series(task_jshint, task_jshint1)
//  exports.default = gulp.parallel(task_jshint, task_jshint1)
//  exports.both = gulp.series(task_jshint, task_jshint1)

//gulp minify and rename css files
//gulp-rename
//gulp-clean-css

// var styleSRC = './src/scss/style.css';
// // var styleSRC = './src/scss/style.scss';
// var styleDEST = './dist/css';

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done()
// })


// var styleSRC = './src/scss/style.scss';
// var styleDEST = './dist/css';
// // // //sass complie + minify + rename
// // // //gulp-sass 

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             // errLogToConsole:false, //<= look into this
//             outputStyle:'compressed'
//         }))
//         // .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done()
// })



// var styleSRC = './src/scss/style.scss';
// var styleDEST = './dist/css';
// //sass compile + minify + rename + autoprefixer + sourcemaps
// //gulp-sourcemaps
// //gulp-autoprefixer


// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             // errLogToConsole:false, //<= look into this
//             outputStyle:'compressed'
//         }))
//         .on('error', console.error.bind(console))
//         .pipe(autoprefixer({
//             // browsers:['last 2 versions'],
//             cascade:false
//         }))
//         // .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(styleDEST));
//     done()
// })

var jsSRC = 'script.js'
// var jsFolder = './src/js/'
var jsDEST = './dist/js/'

var jsFiles = [jsSRC]

gulp.task('js', function(done){
    // gulp.src(jsSRC)
    //     .pipe(gulp.dest(jsDEST));
    // done()

//     //browserify
//     //transform babelify
//     //bundle
//     //source
//     //rename
//     //buffer
//     //init sourcemaps
//     //uglify
//     //write sourcemaps
//     //dist

    jsFiles.map(function(entry){
        return browserify({
            entries:[jsFolder+entry]
        })
        .transform(babelify, {presets:['env']})
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname:".min.js"}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDEST))
    });
    done();
})


// var imgSRC = './src/images/*'
// var imgDEST = './dist/images/'

// gulp.task('image', function(done){
//     gulp.src(imgSRC)
//         .pipe(imagemin())
//         .pipe(gulp.dest(imgDEST));
//         done();
// })

// var styleWatch = './src/scss/**/*.scss';
// var jsWatch = './src/js/**/*.js';

// gulp.task('watch', function(){
//     gulp.watch(styleWatch, gulp.series('styles')),
//     gulp.watch(jsWatch, gulp.series('js'))
//     // return
// })

// gulp.task('default', gulp.parallel('styles', 'js'), function(){
//     ///
// })