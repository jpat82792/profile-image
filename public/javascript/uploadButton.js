let performClick = (queryString) => {
   var elem = document.querySelector(queryString);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
   }
}

let setForwardActionButton = () =>{
  document.querySelector('#forward-button').addEventListener("click", ()=>{
    performClick('#file-uploader');
  });
}

let bindToDomUploadButton = () =>
{
  setForwardActionButton();	
};

let openUploadFileBrowser = () =>
{
  openHiddenFileBrowserInput();
};

let getResultFromFileBrowser = () =>
{
  document.querySelector('#file-uploader').files
};

let getHiddenFileBrowserInput = () =>
{
  return document.querySelector('#file-uploader');
};

window.onload = () =>
{
  bindToDomUploadButton();
};

module.exports = {getHiddenFileBrowserInput : getHiddenFileBrowserInput};
