import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SettingsCard from "./SettingsCard";

it("should render the apply button on the settings card on the page", () => {
  //arrange
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );

  //act
  const applyButton = screen.getByRole("button", { name: /apply/i });

  // assert
  expect(applyButton).toBeInTheDocument();
});

it("the radio button should be selected when clicked", () => {
  //arrange
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );

  //act
  userEvent.click(screen.getByRole("radio", { name: /tech/i }));
});

it("the toggle button should slide when clicked", () => {
  //arrange
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );

  //act
  const toggle = screen.getByRole("checkbox");
  userEvent.click(toggle);

  //assert
  expect(toggle.classList.contains("checked"));
});
