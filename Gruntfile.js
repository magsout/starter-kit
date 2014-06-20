module.exports = function(grunt) {

		var env = 'dev';
	/*
		Grunt installation:
		-------------------
		npm install -g grunt-cli

		
		Project Dependencies:
		---------------------
		npm install grunt --save-dev
		npm install grunt-contrib-watch --save-dev
		npm install grunt-contrib-sass --save-dev
		npm install grunt-contrib-imagemin --save-dev
		npm install load-grunt-tasks --save-dev
		npm install grunt-contrib-handlebars --save-dev
		npm install grunt-contrib-compass --save-dev
		npm install grunt-bower-task --save-dev
		npm install grunt-photobox --save-dev
		npm install grunt-autoprefixer --save-dev
		npm install grunt-contrib-cssmin --save-dev
		npm install grunt-combine-media-queries --save-dev
		npm install grunt-concurrent --save-dev
		npm install --save time-grunt	

		
		Simple Dependency Install:
		--------------------------
		npm install (from the same root directory as the `package.json` file)
		
		Gem Dependencies:
		-----------------
		gem install image_optim
		
		Project Dependencies:
		---------------------	
		grunt first
		
		Project watching dev
		---------------------	
		grunt dev
		
		Project distribution
		---------------------	
		grunt dist
		
	*/

	 //Check if package.json exists
	 if (!grunt.file.exists('package.json')) {
		 grunt.log.error("Json file is missing!")
		 process.exit(1)
	}
	
	//Grunt time
	require('time-grunt')(grunt);

	// Initialize config.
  	grunt.initConfig({
    	pkg: require('./package.json')
	});	
	
	// Load per-task config from separate files.
	grunt.loadTasks('grunt-tasks');
	
	
	//Import all module
	require('load-grunt-tasks')(grunt)
	
	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});

	
	//Distribution
	grunt.registerTask('dist', function(){
		env = 'dist';
		grunt.task.run('compass:clean', 'compass:dist','imagemin', 'handlebars:compile', 'autoprefixer', 'cmq', 'cssmin' );

	});

	//Developpement
	grunt.registerTask('dev',  function(){
		env = 'dev';
		grunt.task.run('concurrent');
	});

};

