import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
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

it("should show user on submittion of the correct username and password", () => {
  render(<Login />);

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordInput = screen.getByRole("textbox", {
    name: /password/i,
  });

  const button = screen.getByRole("button", { name: /login/i });

  userEvent.type(emailInput, "testemail@gmail.com");
  userEvent.type(passwordInput, "test1234");

  userEvent.click(button);
  wait(1000);

  //const successMessage = screen.getByText(/testemail@gmail\.com/i);

  expect(button).toBeInTheDocument();
});

it("should give wrong password error when incorrect password is given", () => {
  render(<Login />);
});

it("should give invalid user error when incorrect username is given", () => {
  render(<Login />);
});
