import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import Settings from "./Settings";

it("should render the apply button on the settings card on the page", () => {
    //arrange
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    //act
    const applyButton = screen.getByRole('button', { name: /apply/i})
  
    // assert
    expect(applyButton).toBeInTheDocument();
});

it("should render the log out button on the settings page", () => {
    //arrange
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    //act
    const logOutButton = screen.getByRole('button', { name: /log out/i})
  
    // assert
    expect(logOutButton).toBeInTheDocument();
});

it("the radio button should be selected when clicked", () => {
    //arrange
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    //act
    userEvent.click(screen.getByRole('radio', {name: /tech/i}))
});

it("the toggle button should slide when clicked", () => {
    //arrange
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    //act
    const toggle = screen.getByRole('checkbox')
    userEvent.click(toggle)

    //assert
    expect(toggle.classList.contains("input:checked")).toBe(false)
});






