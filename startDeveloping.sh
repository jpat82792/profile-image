set projectDirectory=pwd
echo "Watching Sass files for changes"
x-terminal-emulator -e gulp watchSass &
x-terminal-emulator -e docker run -v $(pwd):/usr/src/app profile-image gulp startServer