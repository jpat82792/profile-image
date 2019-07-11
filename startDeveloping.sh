set projectDirectory=pwd
echo "Watching Sass files for changes"
x-terminal-emulator -e gulp watchSass &
export sassWatcherPid=$!
x-terminal-emulator -e docker run -v $(pwd):/usr/src/app profile-image gulp startServer &
export dockerPid=$!
echo 'sassWatcherPid'
echo $sassWatcherPid
echo 'dockerPid'
echo $dockerPid
