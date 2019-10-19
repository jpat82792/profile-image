'use strict';
import screenTransitionController from './screenTransitionController.js';

let getCancelButton = () =>{
  return document.getElementById('back-button');
}

let getBackButtonContainer = () =>{
  return document.getElementById('back-button-container');
}

let hideBackButton = () =>{
  getBackButtonContainer().classList.add("hide-button");
}

let showBackButton = () =>{
  getBackButtonContainer().classList.remove("hide-button");
}

getCancelButton().addEventListener('click', ()=>{
  screenTransitionController.setScreenToUploadPrompt();
});

export default {getCancelButton, hideBackButton, showBackButton}