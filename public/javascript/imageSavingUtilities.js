import canvasWrapper from './canvas.js';
import previewImage from './previewImage.js';

let moveImageToPreview = () =>{
  console.log("moveImageToPreview");
  console.log(canvasWrapper.getImageCanvas().toDataURL());
  console.log(canvasWrapper.getCanvasImage());
  let image = canvasWrapper.getImageCanvas().toDataURL();
  previewImage.getPreviewImage().setAttribute("style", 
  "background-image:url("+ image+")");
}

export default {moveImageToPreview}