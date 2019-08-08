set projectDirectory=pwd
echo "Spawning off child processes"
echo "Begin Watching Sass files for changes"
start "Watching Sass files" gulp watchSass
echo "Start the docker node container"
start "Node server" docker-compose up && cmd /k
echo "Done spawning child processes" 
cmd /k