const {src, dest, watch} = require('gulp')
const sass = require('gulp-sass')

const build = function(){
	return src('./src/main.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest('./dist'))
}

const watchAndBuild = function(){
	return watch([
		'./src/*.scss'
	], {ignoreInitial: false}, build)
}

exports.build = build
exports.watch = watchAndBuild