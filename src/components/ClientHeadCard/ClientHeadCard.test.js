import { render, screen } from "@testing-library/react";
import ClientHeadCard from "./ClientHeadCard";

it("should render client card on the page", () => {
  //arrange
  render(<ClientHeadCard name="name" />);

  //act
  const card = screen.getByText("name", { name: /name/i });

  // assert
  expect(card).toBeInTheDocument();
});
