import canvasWrapper from './canvas.js';

let imageWidth;
let imageHeight;

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

let imageIsWiderThanCanvas = () =>{
  return canvasWrapper.getCanvasImage().width > canvasWrapper.getImageCanvas().width;
}

let imageIsTallerThanCanvas = () =>{
  return canvasWrapper.getCanvasImage().height > canvasWrapper.getImageCanvas().height;
}

let getLargestRatio = () =>{
  let heightRatio = getRatio(canvasWrapper.getCanvasImage().height, canvasWrapper.getImageCanvas().height);
  let widthRatio = getRatio(canvasWrapper.getCanvasImage().height, canvasWrapper.getImageCanvas().height);
  return heightRatio > widthRatio ? heightRatio : widthRatio;
}

let getRatio = (image, canvas) =>{
  return canvas / image;
}

export default {scaleImageToFitOntoCanvas, imageIsLargerThanCanvas}