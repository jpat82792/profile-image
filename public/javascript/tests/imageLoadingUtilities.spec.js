'use strict';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const html = readFileSync(resolve(__dirname, '../../../views/index.html'), 'utf8');
import jasmine from 'jasmine';
const imageLoadingUtilitiesPath = '../imageLoadingUtilities.js';
jest.dontMock('fs');


describe('Image loading utilities',()=>{

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    //jest.resetModules();
  });

  describe('Scaling', ()=>{

    test('Is the ratio calculated properly', () =>{
      const util = require('../imageLoadingUtilities.js');
      //const getRatio = util.__get__("getRatio");
      const imageDimension = 1;
      const canvasDimension = 2;
      const ratio = getRatio(1,2);
      expect(ratio).toBe(2);
    });

    test('Image is wider',()=>{
      expect(true).toBe(false);
    });

    test('Image is wider',()=>{
      expect(true).toBe(false);
    });


    test('Image resizes properly', () =>{
      expect(true).toBe(false);
    });

  });

});