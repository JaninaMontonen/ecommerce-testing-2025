import { expect } from "chai";
import get from "../src/get.js";

describe("get – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return a nested value with a dot-path or an array path when the path exists", () => {
      expect(get({'product':{'name':'Bread', 'price':2.20}}, 'product.name')).to.equal('Bread');
      expect(get({'product':[{'name':'Bread'}, {'price':2.20}]}, 'product[0].name')).to.equal('Bread');
      expect(get({'order':{'products':[{'name':'Bread', 'price': 2.20}, {'name':'Milk', 'price':1.20}]}}, ['order', 'products', '1', 'price'])).to.equal(1.20);
    });  

    it("should return a value for an existing string path", () => {
      expect(get(['a', 'b'], '1')).to.equal('b');
    });    

    it("should return the default value when the path does not exist or is empty", () => {
      expect(get({'name':'Bread', 'price':3.50}, 'description', '')).to.equal('');
      expect(get({'name':'Bread'}, 'category', 'Uncategorized')).to.equal('Uncategorized');
      expect(get({}, 'category', 'Unknown')).to.equal('Unknown');
      expect(get({'product':[{}]}, 'product[0].name', 0)).to.equal(0);
      expect(get({'products':['a', 'b']}, 'products[2]', null)).to.equal(null);
      expect(get({'product':'a'}, '', 'default')).to.equal('default');
    });         
        
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return the default value for an unexpected null value", () => {
      expect(get({'product':null}, 'product.name', {})).to.deep.equal({});
    });     
    
    it("should return 'N/A' with object as null, path as product.name and defaultValue as 'N/A'", () => {
      expect(get(null, 'product.name', 'N/A')).to.equal('N/A');
    });
    
    it("should return {} with object as undefined, path as 'product' and defaultValue as {}", () => {
      expect(get(undefined, 'product', {})).to.deep.equal({});
    });
    
    it("should return the default value for malformed or invalid path", () => {
      expect(get({'price':3.50}, 'price..value', 'err')).to.equal('err');
      expect(get({'price':3.50}, 12345, 'fallback')).to.equal('fallback');
    });        
  });

});