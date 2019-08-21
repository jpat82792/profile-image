let selectedFile;
let bindToDomUploadButton = () =>
{
	openHiddenFileBrowserInput()
		.addEventListener("click", (e)=>{
			openUploadFileBrowser();
		});	
};

let openUploadFileBrowser = () =>
{
	openHiddenFileBrowserInput();
};

let getResultFromFileBrowser = () =>
{
	document.querySelector('#file-uploader').files
};

let openHiddenFileBrowserInput = ()=>
{
	let hiddenFileBrowserInput = document.querySelector('#file-uploader');
	hiddenFileBrowserInput.click();
}

window.onload = () =>{
	bindToDomUploadButton();
}