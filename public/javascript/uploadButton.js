'use strict';
import imageEditor from './imageEditor.js';
import canvasWrapper from './canvas.js';
import imageLoadingUtilities from './imageLoadingUtilities.js';

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

let setCanvasImage = (imageUrl) =>{
  canvasWrapper.canvasImage.src = imageUrl;
  canvasWrapper.canvasImage.onload = () =>{
    imageEditor.setImageEditorListeners();
    if(imageLoadingUtilities.imageIsLargerThanCanvas()){
      imageLoadingUtilities.scaleImageToFitOntoCanvas();
    }
    canvasWrapper.drawCanvas(0,0);
  }
}

let loadImage = () =>{
  let imageUrl = window.URL.createObjectURL(getHiddenFileBrowserInput().files[0]);
  setCanvasImage( imageUrl);
}


export default {getHiddenFileBrowserInput, loadImage, bindToDomUploadButton}
