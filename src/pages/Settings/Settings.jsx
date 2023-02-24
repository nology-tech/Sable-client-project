//import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
const Settings = () => {
  return (
    <div className="settings-container">
      <NavContainer />
      
        <PageHeader heading="Setttings" headerType="headingOnly" />
        <SettingsCard/>
     
    </div>
  );
};

export default Settings;