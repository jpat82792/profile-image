const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../views/index.html'), 'utf8');

describe('Screen Transition Controller', ()=>{
  describe('Upload prompt',()=>{
    describe("Backward action button", ()=>{
      it("should be disabled",()=>{
        expect(true).toBe(false);
      });
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Forward action button',()=>{
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Banner',()=>{
      it('should have the correct text',()=>{
        expect(true).toBe(false);
      });
    });
  });

  describe('Save',()=>{
    describe("Backward action button", ()=>{
      it("should be disabled",()=>{
        expect(true).toBe(false);
      });
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Forward action button',()=>{
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Banner',()=>{
      it('should have the correct text',()=>{
        expect(true).toBe(false);
      });
    });
  });

  describe('Loading',()=>{
    describe("Backward action button", ()=>{
      it("should be disabled",()=>{
        expect(true).toBe(false);
      });
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Forward action button',()=>{
      it("should have correct text",()=>{
        expect(true).toBe(false);
      });
    });
    describe('Banner',()=>{
      it('should have the correct text',()=>{
        expect(true).toBe(false);
      });
    });
  });
});