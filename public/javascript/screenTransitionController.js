'use strict';
import uploadButton from './forwardButton.js';
import backButton from './backButton.js';
import canvas from './canvas.js';
import banner from './banner.js';
import profileConfiguration from '../config/profileConfiguration.js';

const setScreenToLoading = () =>{
  console.log("setScreenToLoading");
}

const setScreenToSave = () =>{
  console.log("setScreenToSave");
  uploadButton.changeForwardActionButtonText(profileConfiguration.profileImageConfigurations.savePhoto.forwardButtonText);
  banner.changeBannerText(profileConfiguration.profileImageConfigurations.savePhoto.bannerText);
  backButton.showBackButton();
}

const setScreenToUploadPrompt = () => {
  console.log('setScreenToUploadPrompt');
  uploadButton.changeForwardActionButtonText(profileConfiguration.profileImageConfigurations.uploadPhoto.forwardButtonText);
  backButton.hideBackButton();
  banner.changeBannerText(profileConfiguration.profileImageConfigurations.uploadPhoto.bannerText);
  canvas.resetCanvas();
}

export default {setScreenToSave, setScreenToUploadPrompt}