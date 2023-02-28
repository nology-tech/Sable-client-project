import { render, screen } from "@testing-library/react";
import Error from "./Error";


it("shoud render the error page", () =>{
    render (<Error page={page}/>)
})
