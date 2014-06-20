init: 
	@ echo "❯ Initializing..."
	@ bundle install --path vendors/bundle
	@ npm install
	@ bower install
	
update:
	@ echo "❯ Updating..."
	@ npm update
	@ bower update
	@ bundle update

watch:
	@ echo "❯ Watching..."
	@ grunt dev

watchOut:
	@ echo "❯ Watching..."
	@ grunt dev > grunt_log.txt

see:
	@ echo "❯ Watching..."
	@ tail -F grunt_log.txt
	
dist:
	@ echo "❯ Distribution..."
	@ grunt dist