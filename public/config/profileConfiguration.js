
let configurationsJson = `{
  "photoMode":"circular",
  "uploadPhoto" : {
    "forwardButtonText": "Upload from your computer",
    "bannerText":"Upload a photo",
    "cancelButtonText":"Cancel"
  },
  "savePhoto":{
    "forwardButtonText": "Save as profile",
    "bannerText":"Crop your photo",
    "cancelButtonText":"Cancel"
  },
  "photoConstants":{
    "circular": "circular",
    "rectangular": "rectangular"
  }
}`;

let profileImageConfigurations = JSON.parse(configurationsJson);

export default {profileImageConfigurations}