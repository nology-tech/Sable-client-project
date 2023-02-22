import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";

const Home = () => {
  return (
    <div className="app-container">
      <NavContainer />
      <Layout>
        <HomePageContainer/>
      </Layout>
    </div>
  );
};

export default Home;
