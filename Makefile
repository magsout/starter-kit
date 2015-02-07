install:
	@ echo "❯ Initializing..."
	npm install

update:
	@ echo "❯ Updating..."
	npm update

watch:
	@ echo "❯ Watching..."
	gulp

build:
	@ echo "❯ Building..."
	gulp build

dist:
	@ echo "❯ Distribution..."
	(rm  ./assets/build/javascripts/*.js)
	(rm  ./assets/build/stylesheets/*.css)
	gulp dist --production
