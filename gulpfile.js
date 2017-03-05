var gulp = require('gulp');//引入gulp
var sass = require('gulp-sass');//引入gulp-sass
var prefix = require('gulp-autoprefixer');//自动补齐厂商前缀
var minify = require('gulp-minify-css');//压缩css文件
var imagemin = require('gulp-imagemin');//压缩PNG,JPEG GIF SVG格式图片
var pngquant = require('imagemin-pngquant');//专门压缩png图片

gulp.task('sass', function(){
  gulp.src('src/main.scss')
      .pipe(sass())
      .pipe(prefix())
      .pipe(minify())
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy-assets',function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('imagemin', function(){
  return gulp.src('src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default',['sass','copy-assets','imagemin'])
