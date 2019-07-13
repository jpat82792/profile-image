export projectDirectory=pwd
echo "Watching Sass files for changes"
docker build -t profile-image .
osascript -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'
osascript -e 'tell app "Terminal" to do script " gulp watchSass" in window 1' &
export sassWatcherPid=$!
export projectDirectory=$PWD
export commandStart="tell app \"Terminal\" to do script \"docker run -v "
export commandEnd=":/usr/src/app profile-image gulp startServer\" in window 1"
export command=$commandStart$projectDirectory$commandEnd
osascript -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'
osascript -e "$command" &
export dockerPid=$!
echo 'sassWatcherPid'
echo $sassWatcherPid
echo 'dockerPid'
echo $dockerPid