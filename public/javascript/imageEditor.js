'use strict';
import canvasWrapper from './canvas.js';
import imageSavingUtils from './imageSavingUtilities.js';

const imageStartPosition = {left:0, top:0};
let imagePosition = imageStartPosition;
let previousPosition = imageStartPosition;
let isClicked = false;

let setImageEditorListeners = () =>{
  canvasWrapper.getImageCanvas().addEventListener('mousedown',(event)=>{
      onMouseDown(event);
  });
  canvasWrapper.getImageCanvas().addEventListener('mousemove',(event)=>{
      onMouseMove(event);
  });
  window.addEventListener('mouseup', (event)=>{
      onMouseUp(event);
  });
}

let onMouseDown = (event) =>{
  console.log("mouseDown");
  let mousePosition = getMousePosition(event);
  setPositions(mousePosition, mousePosition);
  canvasWrapper.drawCanvas(imagePosition.left, imagePosition.top);
  isClicked = true;
}

let onMouseMove = (event)=>{
  
  if(isClicked){
    console.log("mouseMove");
      let mousePosition = getMousePosition(event);
      setPositions(imagePosition, mousePosition);
      canvasWrapper.drawCanvas(imagePosition.left, imagePosition.top);
  }
}

let onMouseUp = (event)=>{
  isClicked = false;
  canvasWrapper.clipImageOut(imagePosition);
  imageSavingUtils.moveImageToPreview();

}

let setPositions = (previousPosition, currentPosition) =>{
  setPreviousPosition(previousPosition);
  setImagePosition(currentPosition);
}

let setPreviousPosition = (mousePosition)=>{
  previousPosition = {left:Math.round(mousePosition.x),
      top: Math.round(mousePosition.y)
  };
}

let setImagePosition = (mousePosition)=>{
  imagePosition = {left:Math.round(mousePosition.x),
      top: Math.round(mousePosition.y)
  };
}

let getMousePosition = (event)=>{
  let rect = event.srcElement.getBoundingClientRect(),
  scalingFactors = getMousePositionScalingFactors(rect);
  return {
      x: (event.clientX - rect.left) * scalingFactors.x,
      y: (event.clientY - rect.top) * scalingFactors.y
  };
}

let getMousePositionScalingFactors = (rect) =>{
  return{
      x : canvasWrapper.getImageCanvas().width / rect.width,
      y : canvasWrapper.getImageCanvas().height / rect.height
  }
}

let getImagePosition = () =>{
  return imagePosition;
}

export default {setImageEditorListeners, getImagePosition};