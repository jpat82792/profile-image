import canvasWrapper from './canvas.js';
import imageEditor from './imageEditor.js';
const scaleOffset = 1;
let scaleValue=1;


let getZoomSlider = () =>{
  return document.querySelector("#zoom-slider");
}

let zoomBasedOnSlider = (slider) =>{
  scaleValue = slider.value;
  canvasWrapper.drawCanvas(imageEditor.getImagePosition().left, imageEditor.getImagePosition().top);
}
let getScaleValue = () =>{
  return scaleValue;
}

getZoomSlider().oninput = () =>{zoomBasedOnSlider(getZoomSlider());};

export default {zoomBasedOnSlider, getZoomSlider, getScaleValue}