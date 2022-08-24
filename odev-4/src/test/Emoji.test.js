import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import App from "../App";

test('Header Check', () => {
  render(<App/>);
  const header = screen.getByText(/Emoji Search/i);
  expect(header).toBeInTheDocument();
});

test('Emoji list should be rendered successfully', () => {
  render(<App/>);
  const emojis = screen.getAllByText("Copy to clipboard");
  console.log(emojis.length);
  expect(emojis.length).toEqual(42);
});

test('Filtered list should be rendered successfully', () => {
  render(<App/>);
  const input = screen.getByPlaceholderText("Search emoji");
  userEvent.type(input, "grin");
  const emojis = screen.getByText("Grin");
  expect(emojis).toBeInTheDocument();
})
