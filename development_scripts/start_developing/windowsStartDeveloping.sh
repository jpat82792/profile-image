cd ../..
set projectDirectory=pwd
echo "Spawning off child processes"
echo "Start building docker image"
# start docker-compose build
echo "Begin Watching Sass files for changes"
start "Watching Sass files" gulp watchSass
echo "Start the docker node container"
start "Node server" docker-compose up && cmd /k
echo "Done spawning child processes" 
cmd /k