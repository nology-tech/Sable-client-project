import React from "react";
import Form from "../../components/Form/Form";
import HomeButton from "../../components/HomeButton/HomeButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./EditResource.scss";

const EditResource = () => {
  return (
    <div>
      <NavContainer />
      <PageHeader
        headerType="headingButton"
        heading="Edit Resource"
        buttonStyle="isHeader"
        text="Save"
        isPlus={true}
      />
      <Form />
      <HomeButton />
    </div>
  );
};

export default EditResource;
