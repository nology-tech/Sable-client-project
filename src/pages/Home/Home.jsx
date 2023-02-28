import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Home" headerType="headingOnly" />
        <HomePageContainer />
        <Button buttonText={"Logout"} buttonStyle={"isLogout"} />;
      </Layout>
    </div>
  );
};

export default Home;
