import { IData } from "./interface";

export const data: IData = {
  shoppingList: [
    {
      id: "B1",
      shoppingCategory: "Baking",
      ingredient: "Baking Powder",
      isCompleted: false
    },
    {
      id: "B2",
      shoppingCategory: "Baking",
      ingredient: "Coconut flour",
      isCompleted: false
    },
    {
      id: "B3",
      shoppingCategory: "Baking",
      ingredient: "Cream of tartar",
      isCompleted: false
    },
    {
      id: "D1",
      shoppingCategory: "Dairy",
      ingredient: "Cream cheese",
      isCompleted: false
    },
    {
      id: "D2",
      shoppingCategory: "Dairy",
      ingredient: "Heavy whipping cream",
      isCompleted: false
    }
  ]
};

export const shoppingCategories = ["Extra", "Baking", "Dairy"];
