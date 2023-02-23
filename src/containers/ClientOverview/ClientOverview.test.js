import { render, screen } from "@testing-library/react";
import ClientOverview from "./ClientOverview";

it("should render the filters", () => {
  render(<ClientOverview />);

  const clientListText = screen.getByRole("heading", { name: /client list/i });
  const searchBar = screen.getByRole("textbox");

  expect(clientListText).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});
