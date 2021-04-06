export interface IData {
  shoppingList: IShoppingList[];
}

export interface IShoppingList {
  id: string;
  shoppingCategory: string;
  ingredient: string;
  isCompleted: boolean;
}
