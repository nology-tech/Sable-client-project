import React from "react";
import Form from "../../components/Form/Form";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./RequestResource.scss";

const RequestResource = ({ staff, category, resourceName, optionsArr }) => {
  return (
    <div className="request-resource-container">
      <NavContainer />
      <Layout>
        <PageHeader
          headerType="headingButton"
          heading="Request Resource"
          buttonStyle="isHeader"
          text="Save"
          isPlus={true}
        />
        <div className="request-resource-container__form">
          <Form
            formPage={"requestResource"}
            staff={staff}
            category={category}
            resourceName={resourceName}
            optionsArr={optionsArr}
            text="Request"
          />
        </div>
        <HomeButton />
      </Layout>
    </div>
  );
};

export default RequestResource;
