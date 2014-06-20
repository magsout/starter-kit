module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de watch css: scripts:
	//https://github.com/gruntjs/grunt-contrib-watch
	grunt.config('watch', {				
		css: {
			files					: 'assets/sass/**/*.scss',
			tasks					: ['compass:dev', 'autoprefixer']
		},
		script: {
			files					: 'assets/js/templates/**/*.handlebars',
			tasks					: ['handlebars']
		}						
	});
};