import { render, screen } from "@testing-library/react";
import Settings from "./Settings";
import { BrowserRouter } from "react-router-dom";


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

it("should not show the nav bar on the mobile view", () => {
    // arrange
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    //act
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query !== "(min-width: 240px) and (max-width: 767px)",
    }));
    const nav = screen.getByRole("navigation");
  
    //assert
    expect(nav).toBeInTheDocument();
});

it("should render the home footer on the page in mobile view", () => {
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
