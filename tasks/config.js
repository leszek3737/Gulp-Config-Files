module.exports = {
	glob: {
		src: "./src/**/*",
		dist: './dist/**/*',
		scss: './src/**/*.scss',
		js: './src/**/*.js',
		html: './src/**/*.html',
		php: './src/**/*.php',
		fonts: './src/fonts/**/*',
		fontsLib: './node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*',
		img: './src/img/**/*',
	},
	entryPoint: {
		scss: './src/scss/style.scss'
	},
	path: {
		css: './dist/css/',
		cssWP: './dist/',
		js: './dist/js/',
		dist: './dist/',
		fonts: './dist/fonts/',
		fontsLib: './dist/fonts/bootstrap/',
		vector: './dist/img/',
		img: './dist/img/',
		wp: './../../wordpress/apps/wordpress/htdocs/wp-content/themes/myTherme/',
	},
	concatOrder: {
		js: './src/**/*.js',
		jsLib: [
            "./node_modules/jquery/dist/jquery.min.js",
            "./node_modules/popper.js/dist/umd/popper.min.js",
            "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        ]
	},
	name: {
		js: "app.js",
		jsMin: "app.min.js",
		jsMinLib: "assets.min.js",
		css: "app.css",
		cssWP: "style.css",
		cssMin: "app.min.css",
	},
	unCssIgnore: [/\.affix/,
    /\.alert/,
    /\.close/,
    /\.collaps/,
    /\.fade/,
    /\.has/,
    /\.help/,
    /\.in/,
    /\.modal/,
    /\.open/,
    /\.popover/,
    /\.tooltip/],
};
