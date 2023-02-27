import React from "react";
import Form from "../../components/Form/Form";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./EditResource.scss";

const EditResource = ({ staff, category, resourceName}) => {
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
        <div className="edit-resource-container__form">
          <Form
            formPage={"editResource"}
            staff={staff}
            category={category}
            resourceName={resourceName}
            optionsArr={[]}
            text="Save"
          />
        </div>
        <HomeButton />
      </Layout>
    </div>
  );
};

export default EditResource;
