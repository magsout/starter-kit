module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de compass dist: dev: watch:
	//https://github.com/gruntjs/grunt-contrib-compass
	grunt.config('compass', {				
		dist: {
			options: {
				config			: 'config.rb',
				environment		: 'production',
				force			: true
			}
		},
		dev: {
			options: {
			config				: 'config.rb'
			}
		},
		watch: {
			options: {
			config				: 'config.rb',
			watch				: true
			}
		},
		clean: {
			options: {
				clean	: true
			}
		}			
	});
};