const $ = require('gulp-load-plugins')();
const config = require('./config');
module.exports = gulp => {
	gulp.task('php-assets', () => {
		return gulp.src(config.glob.php)
			.pipe($.htmlReplace({
				"css": "css/app.css",
				"jsLib": "js/assets.min.js",
				"js": "js/app.js"
			}))
			.pipe(gulp.dest(config.path.dist));
	});
	gulp.task('php-assets:prod', () => {
		return gulp.src(config.glob.php)
			.pipe($.htmlReplace({
				"css": "css/app.min.css",
				"jsLib": "js/assets.min.js",
				"js": "js/app.min.js"
			}))
			.pipe($.stripComments())
			.pipe(gulp.dest(config.path.dist));
	});
	gulp.task('php:prod', [
      'javascript:prod',
      'style:prod',
      'php-assets:prod',
    ]
	);
		gulp.task('php', ['php-assets']	);
};
