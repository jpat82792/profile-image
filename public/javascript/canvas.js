'use strict';
import zoomSlider from './zoomSlider.js';
import imageLoadingUtilities from './imageLoadingUtilities.js';
let canvasImage = new Image();

const drawCanvas = (xCoordinate, yCoordinate) =>{
  getCanvasContext().restore();
  clearCanvas();
  drawNextFrame(xCoordinate, yCoordinate);
}

let drawNextFrame = ( xCoordinate, yCoordinate) =>{

  getCanvasContext().drawImage(canvasImage,xCoordinate,yCoordinate,
    (canvasImage.width *zoomSlider.getScaleValue()), 
    (canvasImage.height * zoomSlider.getScaleValue()));
  getCanvasContext().save();
}

let clipImageOut = (mousePosition) =>{
  clearCanvas();
  clipImage(mousePosition);
}

let clipImage = (mousePosition) =>{
  getCanvasContext().save();
  getCanvasContext().beginPath();
  getCanvasContext().arc(180,180,125,0, 360*Math.PI/180, true);
  getCanvasContext().clip();
  getCanvasContext().drawImage(canvasImage, 
    mousePosition.left, mousePosition.top,
    canvasImage.width *zoomSlider.getScaleValue(),
    canvasImage.height * zoomSlider.getScaleValue()
  );
  getCanvasContext().closePath();
  getCanvasContext().save();
}

let resetCanvas = () =>{
  clearCanvas();
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

export default {drawCanvas, getImageCanvas, canvasImage, getCanvasContext, 
  getCanvasImage, resetCanvas, clipImageOut}