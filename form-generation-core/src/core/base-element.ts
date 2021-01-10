
export enum FormElementType{
  Input
}

export class BaseElement {
  public elementType: FormElementType; 
  public enabled: boolean = true;
  public formGroupOrder: number = 0;
  public guideText: string = "";
  public hidden: boolean = false;
  public label: string = "";
  public name: string = "";
  public required: boolean = false;
}