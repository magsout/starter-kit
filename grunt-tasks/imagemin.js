module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuraton de imagemin
	//https://github.com/gruntjs/grunt-contrib-imagemin
	grunt.config('imagemin', {				
		png: {                          
			options: {                       
            	optimizationLevel: 7
			},                 
			files: [
			{
				expand				: true,                  
				cwd					: 'assets/images/',                   
				src					: ['**/*.png'],   
				dest				: 'assets/images/'                  
			}]
		},
        jpg: {
            options: {
                progressive: true
            },
            files: [
                {
				expand				: true,                  
				cwd					: 'assets/images/',                   
				src					: ['**/*.jpg'],   
				dest				: 'assets/images/'  
                }
            ]
        }				
	});
};