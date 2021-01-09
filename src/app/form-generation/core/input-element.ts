import { BaseElement, FormElementType } from "./base-element";

export class InputElement extends BaseElement
{
  public placeHolderText: string = "";
  public value: string  = "";
  public label: string = "";
  public required: boolean = false;
  
  public constructor(init?:Partial<InputElement>)
  {
    super();
    this.elementType = FormElementType.Input;
    Object.assign(this, init);    
  }
}