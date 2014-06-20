module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de bower
	//https://github.com/yatskevich/grunt-bower-task
	grunt.config('bower', {				
		install: {
	    	options: {
	        	targetDir			: './assets/bower',
				install				: true,
				verbose				: true,
				cleanTargetDir		: false,
				cleanBowerDir		: false
			}
		},
		clean: {
	    	options: {
	        	targetDir			: './assets/bower',
				install				: false,
				verbose				: true,
				cleanTargetDir		: true,
				cleanBowerDir		: true
			}			
		}					
	});
};