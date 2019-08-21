# list of commands to get scoop installed
Try
{
    Write-Host "Begin installing scoop";
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh') -ErrorAction Continue;
    Write-Host "Scoop successfully installed or already installed";
    Write-Host "Checking if docker is installed, throwing error if not";
    $dockerVersion=docker --version;
    if($dockerVersion -eq $null){
        throw "Docker not installed";
    }

}
Catch [System.Management.Automation.CommandNotFoundException]
{
    Write-Host "ERROR:"
    Write-Host "Docker is not installed:";
    $error = $_;
    Write-Error $error.Exception.Message;
    Write-Error $error.InnerException;
}
Finally
{
    scoop install nodejs
    npm install gulp -g  
}
