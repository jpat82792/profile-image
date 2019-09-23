import zoomSlider from './zoomSlider.js';

let canvasImage = new Image();

const drawCanvas = (xCoordinate, yCoordinate) =>{
  clearCanvas();
  drawNextFrame(xCoordinate, yCoordinate);
}

let drawNextFrame = ( xCoordinate, yCoordinate) =>{
  getCanvasContext().drawImage(canvasImage,xCoordinate,yCoordinate,
    (canvasImage.width *zoomSlider.getScaleValue()), 
    (canvasImage.height * zoomSlider.getScaleValue()));
  getCanvasContext().save();
}

let clearCanvas = () =>{
  getCanvasContext().clearRect(0,0,
    getImageCanvas().width, getImageCanvas().height);
  getCanvasContext().save();
}

let getImageCanvas = ()=>{
  return document.querySelector('#image-editor');
}
let getCanvasContext = () =>{
  
  return getImageCanvas().getContext("2d");
}
let getCanvasImage = () =>{
  return canvasImage;
}

export default {drawCanvas, getImageCanvas, canvasImage, getCanvasContext, getCanvasImage}