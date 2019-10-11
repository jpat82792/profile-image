'use strict';
import uploadButton from './uploadButton.js';
import screenTransitionController from './screenTransitionController.js';

window.onload = () =>{
  uploadButton.bindToDomUploadButton();
  uploadButton.getHiddenFileBrowserInput().addEventListener("input", () => {
    uploadButton.loadImage();
    screenTransitionController.setScreenToSave();
  });
}

