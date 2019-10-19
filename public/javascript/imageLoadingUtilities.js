'use strict';
import canvasWrapper from './canvas.js';

let imageWidth;
let imageHeight;

let scaleImageIfNeeded = () =>{
  if(imageIsLargerThanCanvas()){
    scaleImageToFitOntoCanvas();
  }
}

let scaleImageToFitOntoCanvas = () => {
  let scaleRatio = getLargestRatio();
  canvasWrapper.getCanvasImage().height = canvasWrapper.getCanvasImage().height / scaleRatio;
  canvasWrapper.getCanvasImage().width = canvasWrapper.getCanvasImage().width / scaleRatio;
}

let imageIsLargerThanCanvas = () =>{
  if(imageIsTallerThanCanvas() || imageIsWiderThanCanvas()){
    return true;
  }
  return false;
}

let imageDimensionReset = () =>{
  canvasWrapper.getCanvasImage().width = canvasWrapper.getCanvasImage().naturalWidth;
  canvasWrapper.getCanvasImage().height = canvasWrapper.getCanvasImage().naturalHeight;
}

let imageIsWiderThanCanvas = () =>{
  return canvasWrapper.getCanvasImage().width > canvasWrapper.getImageCanvas().width;
}

let imageIsTallerThanCanvas = () =>{
  return canvasWrapper.getCanvasImage().height > canvasWrapper.getImageCanvas().height;
}

let getLargestRatio = () =>{
  let heightRatio = getRatio(canvasWrapper.getCanvasImage().height, canvasWrapper.getImageCanvas().height);
  let widthRatio = getRatio(canvasWrapper.getCanvasImage().width, canvasWrapper.getImageCanvas().width);
  return heightRatio > widthRatio ? heightRatio : widthRatio;
}

let getRatio = (image, canvas) =>{
  return canvas / image;
}

export default {scaleImageIfNeeded, imageDimensionReset}