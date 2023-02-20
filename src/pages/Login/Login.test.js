import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mediaQuery from "css-mediaquery";
import Login from "./Login";

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

it("should render the login page", () => {
  render(<Login />);

  const formTitle = screen.getByRole("heading", {
    name: /welcome back/i,
  });

  expect(formTitle).toBeInTheDocument();
});

it("should render inputs", () => {
  render(<Login />);

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordInput = screen.getByRole("textbox", {
    name: /password/i,
  });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
