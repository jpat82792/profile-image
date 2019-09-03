let rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../views/index.html'), 'utf8');

jest.dontMock('fs');


describe('Upload Button Tests',()=>{

  beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });
  describe('Elements on the page',() =>{
    
    test('Hidden file upload input exists',()=>{
      let uploadButtonSource = require('../uploadButton.js');
      let test = uploadButtonSource.getHiddenFileUploadInput;
      expect(uploadButtonSource.getHiddenFileBrowserInput()).toBeTruthy();
    });

    test('Forward button exists', () =>{
      let forwardActionButton = document.querySelector('#forward-button');
      expect(forwardActionButton).toBeTruthy();
    });
  })

});