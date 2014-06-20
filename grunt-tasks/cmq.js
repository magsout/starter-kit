module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration grunt-combine-media-queries
	//https://github.com/buildingblocks/grunt-combine-media-queries	
	grunt.config('cmq', {				
		options: {
	    	log: true
		},
	    your_target: {
	    	files: {
	        	'assets/stylesheets': ['assets/stylesheets/**/*.css']
			}
		}					
	});
};