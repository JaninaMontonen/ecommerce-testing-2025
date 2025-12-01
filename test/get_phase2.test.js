import { expect } from "chai";
import get from "../src/get.js";

describe("get – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return 'Bread' with object as {'product':{'name':'Bread', 'price':2.20}} and path as 'product.name'", () => {
      expect(get({'product':{'name':'Bread', 'price':2.20}}, 'product.name')).to.equal('Bread');
    });
    
    it("should return 'Bread' with object as {'product':[{'name':'Bread'}, {'price':2.20}]} and path as 'product[0].name'", () => {
      expect(get({'product':[{'name':'Bread'}, {'price':2.20}]}, 'product[0].name')).to.equal('Bread');
    });
    
    it("should return 1.20 with object as {'order':{'products':[{'name':'Bread', 'price': 2.20}, {'name':'Milk', 'price':1.20}]}} and path as ['order', 'products', '1', 'price']", () => {
      expect(get({'order':{'products':[{'name':'Bread', 'price': 2.20}, {'name':'Milk', 'price':1.20}]}}, ['order', 'products', '1', 'price'])).to.equal(1.20);
    });   

    it("should return 'b' with object as ['a', 'b'] and path as '1'", () => {
      expect(get(['a', 'b'], '1')).to.equal('b');
    });    

    it("should return '' with object as {'name':'Bread', 'price':3.50}, path as 'description' and defaultValue as ''", () => {
      expect(get({'name':'Bread', 'price':3.50}, 'description', '')).to.equal('');
    });    
    
    it("should return 'Uncategorized' with object as {'name':'Bread'}, path as 'category' and defaultValue as 'Uncategorized'", () => {
      expect(get({'name':'Bread'}, 'category', 'Uncategorized')).to.equal('Uncategorized');
    });    

    it("should return 'Unknown' with object as {}, path as 'category' and defaultValue as 'Unknown'", () => {
      expect(get({}, 'category', 'Unknown')).to.equal('Unknown');
    });  
    
    it("should return 0 with object as {'product':[{}]}, path as 'product[0].name' and defaultValue as 0", () => {
      expect(get({'product':[{}]}, 'product[0].name', 0)).to.equal(0);
    }); 
    
    it("should return null with object as {'products':['a', 'b']}, path as 'products[2]' and defaultValue as null", () => {
      expect(get({'products':['a', 'b']}, 'products[2]', null)).to.equal(null);
    });   
    
    it("should return 'default' with object as {'product':'a'}, path as '' and defaultValue as 'default'", () => {
      expect(get({'product':'a'}, '', 'default')).to.equal('default');
    });    
    
    it("should return {} with object as {'product':null}, path as product.name and defaultValue as {}", () => {
      expect(get({'product':null}, 'product.name', {})).to.deep.equal({});
    });     
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return 'N/A' with object as null, path as product.name and defaultValue as 'N/A'", () => {
      expect(get(null, 'product.name', 'N/A')).to.equal('N/A');
    });
    
    it("should return {} with object as undefined, path as 'product' and defaultValue as {}", () => {
      expect(get(undefined, 'product', {})).to.deep.equal({});
    });
    
    it("should return 'err' with object as {'price':3.50}, path as 'price..value' and defaultValue as 'err'", () => {
      expect(get({'price':3.50}, 'price..value', 'err')).to.equal('err');
    }); 

    it("should return 'fallback' with object as {'price':3.50}, path as 12345 and defaultValue as 'err'", () => {
      expect(get({'price':3.50}, 12345, 'fallback')).to.equal('fallback');
    });        
  });

});