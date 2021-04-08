import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

// just to try unit test
test("renders heading element", () => {
  render(<ShoppingList />);
  const headingElement = screen.getByText(/Shopping List/i);
  expect(headingElement).toBeInTheDocument();
});
