import { render, screen } from "@testing-library/react";
import RequestResource from "./RequestResource"
import { BrowserRouter } from "react-router-dom";

it("should render the checkboxes on the page", ()=>{
    //arrange
    render(<BrowserRouter><RequestResource/></BrowserRouter>)

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
    render(<BrowserRouter><RequestResource/></BrowserRouter>)

    //act
    const inputBoxes = screen.getAllByRole('textbox');

    //assert
    expect(inputBoxes).toHaveLength(3); 

})

it("should render the form headings", ()=>{
    //arrange
    render(<BrowserRouter><RequestResource/></BrowserRouter>)

    //act
    const purchaseLevel = screen.getByText(/auto\-purchase level/i)

    //assert
    expect(purchaseLevel).toBeInTheDocument();


})



