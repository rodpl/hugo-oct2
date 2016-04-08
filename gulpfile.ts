import * as gulp from "gulp";
import * as debug  from "gulp-debug";
import * as sass   from "gulp-sass";
import * as compass  from "gulp-compass";
import * as sourcemaps  from "gulp-sourcemaps";
// import tsc    from "gulp-typescript";
// import tslint from "gulp-tslint";

import GulpConfig = require("./gulpfile.config");
var config = new GulpConfig.GulpConfig();

gulp.task('default', [
  'build'
]);

gulp.task('build', [
    'css'
]);

gulp.task("css", () => {
    return gulp.src(config.sassFiles)
        .pipe(debug({ title: "css" }))
        .pipe(sourcemaps.init())
        .pipe(compass({
            css: "static/css",
            sass: "static/sass",
            image: "static/img",
            sourcemap: true
        }))
        //.pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../less" }))
        .pipe(gulp.dest("static/css"));
});

/**
 * Lint all my TypeScript files.
 */
// gulp.task("ts-lint", () => {
//     return gulp.src(config.tsFiles)
//         .pipe(debug({ title: "ts-lint" }))
//         .pipe(tslint())
//         .pipe(tslint.report("prose"));
// });

// gulp.task("ts-compile", () => {
//     var tsResult = gulp.src(config.tsFiles)
//         .pipe(debug({ title: "ts-compile" }))
//         .pipe(tsc({
//             target: 'ES5',
//             declarationFiles: false
//         }));
// });
