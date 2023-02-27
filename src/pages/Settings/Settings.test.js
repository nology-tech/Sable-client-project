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