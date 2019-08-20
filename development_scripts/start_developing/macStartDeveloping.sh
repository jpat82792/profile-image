cd ../..
export projectDirectory=pwd
echo "Build web server image"
docker-compose build web
echo "Watching Sass files for changes"
osascript -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'
osascript -e 'tell app "Terminal" to do script "gulp watchSass" in window 1' &
docker-compose up
export dockerPid=$!
echo 'sassWatcherPid'
echo $sassWatcherPid
echo 'dockerPid'
echo $dockerPid