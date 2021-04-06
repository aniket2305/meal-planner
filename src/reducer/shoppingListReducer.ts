import { IData } from "../interface";

interface IAction {
  type: string;
  value: string;
}

export const shopplingListReducer = (state: IData, action: IAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = {
        id: `E-${Date.now()}`,
        shoppingCategory: "Extra",
        isCompleted: false,
        ingredient: action.value
      };
      return {
        ...state,
        shoppingList: [newItem, ...state.shoppingList]
      };
    }
    case "COMPLETE_ITEM": {
      const shoppingListCopy = [...state.shoppingList];
      const updatedItem = shoppingListCopy.map(item => {
        return item.id === action.value ? { ...item, isCompleted: true } : item;
      });

      return {
        ...state,
        shoppingList: updatedItem
      };
    }
    case "UNCOMPLETE_ITEM": {
      const shoppingListCopy = [...state.shoppingList];
      const updatedItem = shoppingListCopy.map(item => {
        return item.id === action.value ? { ...item, isCompleted: false } : item;
      });

      return {
        ...state,
        shoppingList: updatedItem
      };
    }
    case "REMOVE_ITEM": {
      const shoppingListCopy = [...state.shoppingList];
      const index = shoppingListCopy.findIndex(item => {
        return item.id === action.value;
      });
      shoppingListCopy.splice(index, 1);

      return {
        ...state,
        shoppingList: shoppingListCopy
      };
    }

    default:
      return state;
  }
};
