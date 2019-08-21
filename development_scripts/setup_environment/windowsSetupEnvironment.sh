# list of commands to get scoop installed
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
scoop install nodejs docker
npm install gulp -g