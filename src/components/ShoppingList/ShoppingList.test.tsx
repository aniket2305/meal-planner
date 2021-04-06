import { render, screen } from "@testing-library/react";
import App from "./ShoppingList";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Meal Planner/i);
  expect(linkElement).toBeInTheDocument();
});
