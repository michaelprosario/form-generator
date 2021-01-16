import { BaseElement, FormElementType } from "./base-element";

export class InputElement extends BaseElement
{
  public inputType: string = "text";  
  public maxLength: number = 5000;
  public placeHolder: string = "";
  public required: boolean = false;
  public value: string  = "";
  public textArea: boolean = false;
  
  public constructor(init?:Partial<InputElement>)
  {
    super();
    this.elementType = FormElementType.Input;
    Object.assign(this, init);    
  }
}