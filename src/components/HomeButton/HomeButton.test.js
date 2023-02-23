import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx"
import userEvent from "@testing-library/user-event";
import HomeButton from "./HomeButton.jsx"



it("should redirect and update dom", () => {
    render(
      <BrowserRouter>
        <HomeButton />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole('img', {
      name: /home icon/i
    }));
    expect(location.pathname).toEqual("/");
})