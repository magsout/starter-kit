module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de autoprefixer
	//https://github.com/nDmitry/grunt-autoprefixer
	grunt.config('autoprefixer', {				
    	options: {
			browsers : ['ff >= 4', 'ie >= 8', 'safari >= 5.1', 'opera >= 12', 'chrome >=10']
		},
		no_dest: {
	  		src: 'assets/stylesheets/**/*.css'
	  	}					
	});
};