import { render, screen } from "@testing-library/react";
import NavContainer from "./NavContainer";
import NavItem from "../../components/NavItem/NavItem";
import { BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";

it("should render the nav on the page", () => {
  //arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );

  //act
  const nav = screen.getByRole("navigation");

  // assert
  expect(nav).toBeInTheDocument();
});

it("should render the correct image on the page", () => {
  // arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );

  // act
  const image = screen.getByRole("img", { name: /home/i });

  // assert
  expect(image).toBeInTheDocument();
});

it("should render the correct item text on the page", () => {
  // arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );

  // act
  const text = screen.getByText(/home/i);

  //assert
  expect(text).toBeInTheDocument();
});

it("should display the corresponding image to the text", () => {
  // arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );

  // act
  const altText = screen.getByAltText(/home/i);
  const text = screen.getByText(/home/i);

  // assert
  expect(altText).toBeTruthy();
  expect(text).toBeTruthy();
});

it("should display all 5 items in the item container", () => {
  // arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
  render(
    <BrowserRouter>
      <NavItem />
    </BrowserRouter>
  );

  // act
  const itemContainer = screen.queryByRole("main");

  // assert
  expect(itemContainer.children).toHaveLength(5);
});

it("should not have the settings item displayed in the main item container", () => {
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
  render(
    <BrowserRouter>
      <NavItem />
    </BrowserRouter>
  );
  const itemContainer = screen.queryByRole("main");
  const settingsItem = screen.getByAltText(/settings/i);
  expect(settingsItem).not.toBe(itemContainer);
});

it("should show that their are multiple containers", () => {
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
  const navContainer = screen.queryByRole("navigation");
  expect(navContainer.children).toHaveLength(4);
});

it("should show the line break", () => {
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
  const lineBreak = screen.getByRole("img", { name: /divider line/i });
  expect(lineBreak).toBeInTheDocument();
});

<<<<<<< HEAD
it("should render the logo in its own container", () => {
  render(<NavContainer />);
=======
it("should redirect and update dom", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  userEvent.click(screen.getByText(/Home/));
  expect(location.pathname).toEqual("/");
});

it("should render the logo in its own container", () => {
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
>>>>>>> e0be7dd00264b7afac1c48a5a88aa582189007e1
  const navContainer = screen.queryByRole("navigation").firstChild;
  const logo = screen.getByAltText(/company logo/i);
  expect(navContainer.firstChild).toBe(logo);
});

it("should render the logo", () => {
<<<<<<< HEAD
  render(<NavContainer />);
=======
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );
>>>>>>> e0be7dd00264b7afac1c48a5a88aa582189007e1
  const logo = screen.getByRole("img", {
    name: /company logo/i,
  });
  expect(logo).toBeInTheDocument();
});
