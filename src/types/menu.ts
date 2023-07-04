export interface menuItem {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: Array<string>;
  soldOut: boolean;
}
