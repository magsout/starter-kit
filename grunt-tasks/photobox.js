module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de photobox
	//https://github.com/stefanjudis/grunt-photobox
	grunt.config('photobox', {				
		task: {
			options: 
			{
	        	screenSizes : [ '320x480', '480x600', '600x900', '900x1240' ],
				urls        : [ 'http://yoursite.com', 'http://yoursite.com/blog', 'http://yoursite.com/catalog' ]
			}
		}					
	});
};