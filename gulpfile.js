"use strict";

const autoprefixer = require("autoprefixer");
const { task, src: _src, dest: _dest, watch, series } = require("gulp");
const postCSS = require("gulp-postcss");
const { sync, logError } = require("gulp-sass");
const { init, write } = require("gulp-sourcemaps");

const config = {
  src: "./scss",
  dest: "./css",
  options: { outputStyle: "expanded" }
};

task("sass", () => {
  return _src(config.src + "/theme.scss")
    .pipe(init())
    .pipe(sync(config.options).on("error", logError))
    .pipe(postCSS([autoprefixer()]))
    .pipe(write("./"))
    .pipe(_dest(config.dest));
});

task("sass:watch", () => {
  watch(config.src + "/**/*.scss", series("sass"));
});
