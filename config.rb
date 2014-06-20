#Configuration du projet compass


# Root du projet
http_path = '/'

#Folder css
css_dir = 'assets/javascripts/'

# Folder sass
sass_dir = 'assets/sass/'

#Folder image
images_dir =  'assets/images/'

#Folder Bower
add_import_path 'assets/bower/'


# Environnement de production : compass compile/watch sass/default.scss -e production

if environment == :production
  	output_style = :compressed
  	line_comments = false
  	sass_options = { :debug_info => false }  
  	sourcemap = true

# Environnement de developpement : compass compile/watch sass/default.scss

else
	output_style = :expanded
	sourcemap = true
  	sass_options = { :debug_info => false }  
  	line_comments = false
end