import setClass from "./setClass";

describe("Given a setClass function", () => {
    describe("When called with a class 'test' and an additional class 'test--extra'", () => {
      test("Then it should return 'test test--extra'", () => {
        const defaultClass = "text";
        const additionalClass = "text--extra";
        const expectedClass = `${defaultClass} ${additionalClass}`;
  
        const result = setClass(defaultClass, additionalClass);
  
        expect(result).toBe(expectedClass);
      });
    });
  
    describe("When called with a class 'test' and no additional classes", () => {
      test("Then it should return 'test'", () => {
        const defaultClass = "text";
        const additionalClass = undefined;
  
        const result = setClass(defaultClass, additionalClass);
  
        expect(result).toBe(defaultClass);
      });
    });
  });