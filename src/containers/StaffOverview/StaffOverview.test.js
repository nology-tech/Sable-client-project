import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import StaffOverview from "./StaffOverview";

it("should render the staff overview section", () => {
  render(<StaffOverview currentStaff="Marianna"/>);

  const overviewCardName = screen.getByText("Overview");

  expect(overviewCardName).toBeInTheDocument();
});

it("should render a booking component card", () => {
  render(<StaffOverview currentStaff="Marianna"/>);

  const bookingDate = screen.getByText(/05\/03\/2023/i); 
  const price = screen.queryByText(/£12\.99/i);
  expect(bookingDate).toBeInTheDocument();
  expect(price).toBeNull();
  expect(price).not.toBeInTheDocument();
});

it("should render the filter options", () => {
  render(<StaffOverview currentStaff="Marianna"/>);

  const staffBookingsText = screen.getByRole("heading", {
    name: /Bookings List/i,
  });
  const filterText = screen.getByText(/filter/i);
  const sortText = screen.getByText(/sort/i);

  expect(staffBookingsText).toBeInTheDocument();
  expect(filterText).toBeInTheDocument();
  expect(sortText).toBeInTheDocument();
});

// it("should render the filtered options", ()=>{
//   render(<StaffOverview  currentStaff="Marianna"/>);

//   const filterBox = screen.getByText(/filter/i)
//   userEvent.click(filterBox)
//   userEvent.click(screen.getAllByText(/confirmed/i))
//   const consultantText = screen.getByText(/NO/);
//   expect(consultantText).toBeNull();

// })