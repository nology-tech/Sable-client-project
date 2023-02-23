import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
<<<<<<< HEAD

=======
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
>>>>>>> 763dbaf3c9e5f5bd7b99e6fdee59baf7d5eedf1d
const Home = () => {
  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
<<<<<<< HEAD
        <div className="header">Header</div>
        <HomePageContainer/>
=======
        <PageHeader heading="Home" headerType="headingOnly" />
        <HomePageContainer />
>>>>>>> 763dbaf3c9e5f5bd7b99e6fdee59baf7d5eedf1d
      </Layout>
    </div>
  );
};

export default Home;
