cd ../..
set projectDirectory=pwd
echo "Watching Sass files for changes"
x-terminal-emulator -e gulp watchSass &
export sassWatcherPid=$!
x-terminal-emulator -e docker-compose up &
export dockerPid=$!
echo 'sassWatcherPid'
echo $sassWatcherPid
echo 'dockerPid'
echo $dockerPid
