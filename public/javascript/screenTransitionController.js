'use strict';
import uploadButton from './forwardButton.js';
import backButton from './backButton.js';
import textConstants from './textConstants.js';
import canvas from './canvas.js';

const setScreenToLoading = () =>{
  console.log("setScreenToLoading");
}

const setScreenToSave = () =>{
  console.log("setScreenToSave");
  uploadButton.changeForwardActionButtonText(textConstants.forwardButtonTextPhoto);
  backButton.showBackButton();
}

const setScreenToUploadPrompt = () => {
  console.log('setScreenToUploadPrompt');
  uploadButton.changeForwardActionButtonText(textConstants.forwardButtonTextNoPhoto);
  backButton.hideBackButton();
  canvas.resetCanvas();
}

export default {setScreenToSave, setScreenToUploadPrompt}