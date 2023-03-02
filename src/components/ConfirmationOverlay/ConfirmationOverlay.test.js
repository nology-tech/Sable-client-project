import { render, screen } from "@testing-library/react";
import ConfirmationOverlay from "./ConfirmationOverlay";
import Settings from "../../pages/Settings/Settings";
import userEvent from "@testing-library/user-event"


it("shouldnt render confirmation overlay on the page", () => {
  //arrange
  render(<Settings/>);

  //act
  const overlay = screen.queryByText('Are you sure you want to log out?');

  // assert
  expect(overlay).not.toBeInTheDocument();
});