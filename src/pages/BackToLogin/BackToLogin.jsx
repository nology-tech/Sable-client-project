import React from "react";
import "./BackToLogin.scss";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";

const BackToLogin = () => {
  return (
    <Layout>
      <div className="header-container">
        <PageHeader heading="" headerType="headingOnly" />
      </div>

      <div className="content-container">
        <ConfirmationOverlay
          overlayType="overlayLogin"
          text="Logged out!"
          buttonStyleOne="isMobilePopup"
          buttonTextOne="Back to login"
        />
      </div>
    </Layout>
  );
};

export default BackToLogin;
