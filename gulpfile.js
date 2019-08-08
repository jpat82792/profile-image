let gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    exec = require("gulp-exec"),
    execServer = require('child_process').exec
    browserSync = require("browser-sync").create();
    
let paths = {
    styles: {
        src: "src/*.scss",
        dest: "public/css"
    }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// A simple task to reload the page
function reload() {
    browserSync.reload();
}

function startServer(){
  execServer('npm run start', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  
}

// Add browsersync initialization at the start of the watch task
function watch() {
    gulp.watch(paths.styles.src, style);
}

exports.watch = watch
exports.style = style;
exports.startServer = startServer
let build = gulp.parallel(style, watch, startServer);
let compileSass = gulp.parallel(style, watch); 
gulp.task('default', build);
gulp.task('watchSass', compileSass);