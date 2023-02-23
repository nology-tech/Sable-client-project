import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";

const Home = () => {
  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
        <div className="header">Header</div>
        <HomePageContainer/>
      </Layout>
    </div>
  );
};

export default Home;
