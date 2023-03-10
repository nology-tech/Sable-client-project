import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import "../Home/Home.scss";
import React, { useState } from "react";

const Home = ({ setUser }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setShowOverlay(!showOverlay);
    setIsActive(!isActive);
  };

  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
        <div
          className={
            isActive
              ? "home-container__content + active"
              : "home-container__content"
          }
        >
          <PageHeader heading="Home" headerType="headingOnly" />
          <HomePageContainer handleClick={handleToggle} />
        </div>
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
      </Layout>
    </div>
  );
};

export default Home;
