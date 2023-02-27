import { render, screen } from "@testing-library/react";
import EditResource from "./EditResource";
import { BrowserRouter } from "react-router-dom";

it("should render the checkboxes on the page", ()=>{
    //arrange
    render(<BrowserRouter><EditResource/></BrowserRouter>)

    //act
    const checkBoxYes = screen.getByRole('checkbox', {
        name: /yes/i,
        })
    const checkBoxNo = screen.getByRole('checkbox', {
        name: /no/i,
        })

    //assert
    expect(checkBoxYes).toBeInTheDocument();  
    expect(checkBoxNo).toBeInTheDocument();  

})

it("should render all the input fields", ()=>{
    //arrange
    render(<BrowserRouter><EditResource/></BrowserRouter>)

    //act
    const inputBoxes = screen.getAllByRole('textbox');

    //assert
    expect(inputBoxes).toHaveLength(5); 

})

it("should render the form headings", ()=>{
    //arrange
    render(<BrowserRouter><EditResource/></BrowserRouter>)

    //act
    const purchaseLevel = screen.getByText(/auto\-purchase level/i)
    const quantRemaining = screen.getByText(/quantity remaining/i)
    const categoryName = screen.getByText(/category name/i)
    const staffMember = screen.getByText(/staff member/i)
    const resourceName = screen.getByText(/resource name/i)

    //assert
    expect(purchaseLevel).toBeInTheDocument();
    expect(quantRemaining).toBeInTheDocument();
    expect(categoryName).toBeInTheDocument();
    expect(staffMember).toBeInTheDocument();
    expect(resourceName).toBeInTheDocument();
    
})