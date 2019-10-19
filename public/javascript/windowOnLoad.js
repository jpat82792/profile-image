'use strict';
import uploadButton from './forwardButton.js';
import screenTransitionController from './screenTransitionController.js';

window.onload = () =>{
  uploadButton.bindToDomUploadButton();
  uploadButton.getHiddenFileBrowserInput().addEventListener("input", () => {
    uploadButton.tryToLoadImage();
    screenTransitionController.setScreenToSave();
  });
}

