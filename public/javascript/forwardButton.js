'use strict';
import imageEditor from './imageEditor.js';
import canvasWrapper from './canvas.js';
import imageLoadingUtilities from './imageLoadingUtilities.js';
import screenTransitionController from './screenTransitionController.js';
import zoomSlider from './zoomSlider.js';

let performClick = (queryString) => {
   var elem = document.querySelector(queryString);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
   }
}

let getForwardActionButton = () =>{
  return document.querySelector('#forward-button');
}

let setForwardActionButton = () =>{
  getForwardActionButton().addEventListener("click", ()=>{
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

}
let tryToLoadImage = () =>{
  try{
    loadImage();
  }
  catch(error){
    /*console.error(error);*/
  }
}
let loadImage = () =>{
  let imageUrl = window.URL.createObjectURL(getHiddenFileBrowserInput().files[0]);
  setCanvasImage( imageUrl);
}

let changeForwardActionButtonText = (buttonText) =>{
  getForwardActionButton().textContent = buttonText;
}

canvasWrapper.getCanvasImage().onload = ()=>{
  imageLoadingUtilities.imageDimensionReset();
  imageEditor.setImageEditorListeners();
  imageLoadingUtilities.scaleImageIfNeeded();
  canvasWrapper.drawCanvas(0,0);
  screenTransitionController.setScreenToSave()
}


export default {getHiddenFileBrowserInput, tryToLoadImage, bindToDomUploadButton, changeForwardActionButtonText}
