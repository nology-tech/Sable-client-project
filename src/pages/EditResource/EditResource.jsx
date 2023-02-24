import React from "react";
import Form from "../../components/Form/Form";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./EditResource.scss";

const EditResource = () => {
  return (
    <div className="edit-resource-container">
      <NavContainer />
      <Layout>
        <PageHeader
          headerType="headingButton"
          heading="Edit Resource"
          buttonStyle="isHeader"
          text="Save"
          isPlus={true}
        />
        <Form />
      </Layout>
      <HomeButton />
    </div>
  );
};

export default EditResource;
