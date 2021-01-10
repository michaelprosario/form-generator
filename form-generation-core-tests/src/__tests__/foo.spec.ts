import { FormConfig, InputElement } from "form-generation-core";

function add(a: number,b: number){
  return a + b;
}

test('add should return the correct result', () => {
  let result = add(3,2);
  expect(result).toBe(5);
})

test('test 2', () => {
  let formConfig = new FormConfig();

  let input1 = new InputElement({ 
    formGroupOrder: 1,                 
    label: "thing",         
    required: true, 
    value: "",        
    name: "thing",
    maxLength: 50
  });
  formConfig.formElements.push(input1);
  
  expect(formConfig.formElements[0].label).toBe("thing");
})

