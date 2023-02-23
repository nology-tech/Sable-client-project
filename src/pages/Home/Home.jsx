import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import BookingDetailsCard from "../../components/BookingDetailsCard/BookingDetailsCard";
import ContactDetailsCard from "../../components/ContactDetailsCard/ContactDetailsCard";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
const Home = () => {
  const cardObject1 = {birthDate: "10/10/2000" , email:"mikolaj@gmail.com" , number: "07424020033"}
  const cardObject2 = {date: "10/10/2022", time:"12:40", staff: "Rob"}
  return (
    <div className="home-container">
      <NavContainer /> 
      <Layout>
        <PageHeader heading="Home" headerType="headingOnly" />
        <HomePageContainer />
        <div>
        <BookingDetailsCard cardObject={cardObject2} />
        <ContactDetailsCard cardObject={cardObject1} />
      </div>
      </Layout>
    </div>
  );
};

export default Home;
