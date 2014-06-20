module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration grunt-concurrent
	//https://github.com/sindresorhus/grunt-concurrent
	grunt.config('concurrent', {				
		target: {
			tasks: ['watch:css', 'watch:script'],
		    	options: {
		        	logConcurrentOutput: true
				}
		}					
	});
};