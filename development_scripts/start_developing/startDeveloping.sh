cd ../..
set projectDirectory=pwd
echo "Watching Sass files for changes"
x-terminal-emulator -e gulp watchSass &
echo "Setting up listeners for javascript tests"
x-terminal-emulator -e npm run test &
export sassWatcherPid=$!
x-terminal-emulator -e docker-compose up &
export dockerPid=$!
echo 'sassWatcherPid'
echo $sassWatcherPid
echo 'dockerPid'
echo $dockerPid
