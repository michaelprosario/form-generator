import { BaseElement } from "./base-element";

export class InputElement extends BaseElement
{
  public placeHolderText: string = "";
  public value: string  = "";
  public label: string = "";
  public required: boolean = false;
}