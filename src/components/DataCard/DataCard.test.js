import { render, screen } from "@testing-library/react";
import DataCard from "./DataCard";

it("should render the staff card with correct props", () => {
  render(
    <DataCard
      name={"Test"}
      email={"hello"}
      mobileNumber={2423789}
      isConsumer={true}
      isEmployed={false}
      courseName={"whatever"}
    />
  );

  const nameText = screen.getByRole("heading", { name: /test/i });
  const courseName = screen.getByText(/whatever/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
});

it("Should not render resourceName in a staff card", () => {
  render(
    <DataCard
      name={"Test"}
      email={"hello"}
      resourceName={"Syringes"}
      mobileNumber={2423789}
      isConsumer={true}
      isEmployed={false}
      courseName={"whatever"}
    />
  );

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const nameText = screen.getByRole("heading", { name: /test/i });
  const courseName = screen.getByText(/whatever/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
  expect(syringeText).toBeNull;
  expect(syringeText).not.toBeInTheDocument();
});

it("should render a resource card with correct props", () => {
  render(
    <DataCard
      resourceName={"Syringes"}
      quantity={300}
      cost={"£12.99"}
      isAutoPurchase={true}
      autoPurchaseLevel={50}
    />
  );

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£12\.99/i);

  expect(syringeText).toBeInTheDocument();
  expect(resourcePrice).toBeInTheDocument();
});

it("should not render a mobile number in a resource data card", () => {
  render(
    <DataCard
      resourceName={"Syringes"}
      mobileNumber={"3364587231"}
      quantity={300}
      cost={"£12.99"}
      isAutoPurchase={true}
      autoPurchaseLevel={50}
    />
  );

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£12\.99/i);
  const mobileNumber = screen.queryByText(/3364587231/i);

  expect(syringeText).toBeInTheDocument;
  expect(resourcePrice).toBeInTheDocument();
  expect(mobileNumber).toBeNull();
  expect(mobileNumber).not.toBeInTheDocument();
});
