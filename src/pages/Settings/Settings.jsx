import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
import Button from "../../components/Button/Button";



const Settings = () => {
  return (
    <div className="settings-container">
    <NavContainer /> 
    <Layout>
      <PageHeader heading="Settings" headerType="headingOnly" />
      <SettingsCard/>
      <Button buttonText='Log out'/> 
    </Layout>
  </div>
  );
};

export default Settings;