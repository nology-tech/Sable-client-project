import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import BookingDetailsCard from "../../components/BookingDetailsCard/BookingDetailsCard";
import ContactDetailsCard from "../../components/ContactDetailsCard/ContactDetailsCard";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
const Home = () => {
  // const cardObject = [{"birthDates": "10/10/2000" ,"email":"mikolaj@gmail.com" , "mobileNumber" : "07424020033","bookingDate":"20/10/2000" ,"bookingTime":"11:20","staffMember":"staff01"}]

  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Home" headerType="headingOnly" />
        <HomePageContainer />
        <div>
        <BookingDetailsCard  />
      <ContactDetailsCard  />
      </div>
      </Layout>
    </div>
  );
};

export default Home;
