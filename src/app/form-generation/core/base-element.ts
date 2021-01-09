
export enum FormElementType{
  Input
}

export class BaseElement {
  public elementType: FormElementType; 
  public enabled: boolean;
  public formGroupOrder: number = 0;
  public guideText: string = "";
  public name: string = "";
  public required: boolean = false;
  public hidden: boolean = false;
}