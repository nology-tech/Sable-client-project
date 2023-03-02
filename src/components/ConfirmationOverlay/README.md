This is a guide for choosing which Overlay design type you may need for your page.

The available PROPS to be passed through are as follows:-

- overlayType: This will choose which overlay type you need (One button or two)
- text: This is the text that will display as your message for the user
- buttonTextOne: This is the text to appear on the first button
- buttonTextTwo: This is the text to appear on the second button
- buttonStyleOne: This is the style for the first button
- buttonStyleTwo: This is the style for the first button

In order to have the overlay on your page you will need to import useState at the top of the page and copy the 2 function below.

import { useState } from "react";

const [showOverlay, setShowOverlay] = useState(false);

const handleToggle = () => {
setShowOverlay(!showOverlay);
};

Once added, wrap the Overlay component in the following code

{showOverlay && (<ConfirmationOverlay/>)}

If you want an Overlay with one button that says "booking" and has a purple style (see BUTTON read me for full list of styles) then it would look like this:-

<ConfirmationOverlay
overlayType="overlayOneButton"
text="booking" 
buttonStyleOne="isPurple" 
buttonTextOne="book" />

If you want an Overlay with two buttons that says "Are you sure you want to delete this client" and the first button style to have the "Cancel" option and the second button to have the "Confirm" option then it would look like this:-

<ConfirmationOverlay
overlayType="overlayTwoButton"
text="Are you sure you want to delete this client" 
buttonStyleOne="isDelete--cancel" 
buttonTextOne="Cancel"
buttonStyleTwo="isDelete--confirm" 
buttonTextTwo="Confirm" />

To style the overlay, wrap the header and page content in a div and add this turnary so that it adds an opacity class to the overlay. See example below:-

 <div
          className={
            isActive
              ? "home-container__content + active"
              : "home-container__content"
          }
        >
          <PageHeader heading="Home" headerType="headingOnly" />
          <HomePageContainer />
        </div>

Important - ConfirmationOverlay needs to be outside of the turnary.

         {showOverlay && (
          <ConfirmationOverlay
            overlayType="overlayLogout"
            text="Are you sure you want to log out?"
            buttonStyleOne="isLogoutPopup--logout"
            buttonTextOne="Logout"
            buttonStyleTwo="isLogoutPopup--back"
            buttonTextTwo="Back"
            handleToggle={handleToggle}
            setUser={setUser}
          />
        )}

Add the following under the previous useState:-
const [isActive, setIsActive] = useState(false);

Add the following to the handleToggle function:-
setIsActive(!isActive);

Add active class into relevant scss file so that when called, it activates the effect:-
.active{
opacity:20%
}

Pass the handleClick (handleToggle) function to the button in the container where you want the overlay to apply to.

Mobile view

Media queries has been added to a maximum width of 767px.
