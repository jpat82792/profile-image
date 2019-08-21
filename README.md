<h1>Setting up the environment</h1>
<h2>Current setup</h2>
<p>
Install npm, node, gulp, and docker.Then run startDeveloping.sh for your 
respective environment.
</p>
<h2>Future setup</h2>
<p>We have two commands to run before you can begin developing.
The first is the <b>setupEnvironment.sh</b>. This will install the necessary 
components to have all the tools needed to build the development environment. 
If you would like an overview you can find the source scripts underneath the 
development_scripts folder. There are status documents below for the different
operating systems.
</p>
<details>
	<summary>Linux</summary>
	<b>Status:</b> Incomplete
</details>
<details>
	<summary>OSX</summary>
	<b>Status:</b> Incomplete
</details>
<details>
	<summary>Windows</summary>
	<b>Status:</b> Stable
	<h4><b>Steps:</b></h4>
	<ol>
		<li>
			You must have docker desktop for environment setup to complete the process.
		</li> 
		<li>
			After having Docker Desktop installed, run the <b>development_environment/setup_environment/windowsSetupEnvironment.ps1</b>
			to install npm, node, and gulpjs.
		</li>
		<li>
			Run <b>development_environment/start_developing/windowsStartDeveloping.sh</b>
		</li>
	</ol>
	Whenever you restart developing, you will only need do step 3.
</details>