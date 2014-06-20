module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration cssmin
	//https://github.com/gruntjs/grunt-contrib-cssmin
	grunt.config('cssmin', {				
    	options: {
	    	report: 'gzip'
    	},
		minify: {
			expand : true,
	    	cwd: 'assets/stylesheets',
			src: ['**/*.css'],
			dest: 'assets/build/stylesheets',
			ext: '.css'
		}					
	});
};