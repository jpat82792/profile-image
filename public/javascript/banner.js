'use strict';

let changeBannerText = (text) =>{
  getBanner().textContent = text;
}

let getBanner = () =>{
  return document.querySelector('#banner');
}

export default {changeBannerText}