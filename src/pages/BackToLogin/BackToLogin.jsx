import React from "react";
import "./BackToLogin.scss";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import Layout from "../../components/Layout/Layout";

const BackToLogin = () => {
  return (
    <Layout>
      <ConfirmationOverlay
        overlayType="overlayLogin"
        text="Logged out!"
        buttonStyleOne="isMobilePopup"
        buttonTextOne="Back to login"
      />
    </Layout>
  );
};

export default BackToLogin;
