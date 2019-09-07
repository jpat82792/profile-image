cd ../..
set projectDirectory=pwd
echo "Spawning off child processes"
echo "Start javascript unit tests"
start "Javascript unit testing" npm run test 
echo "Begin Watching Sass files for changes"
start "Watching Sass files" gulp watchSass
echo "Start building docker image"
# start docker-compose build
echo "Start the docker node container"
start "Node server" docker-compose up
echo "Done spawning child processes" 
cmd /k