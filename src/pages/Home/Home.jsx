import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import BookingDetailsCard from "../../components/BookingDetailsCard/BookingDetailsCard";
import ContactDetailsCard from "../../components/ContactDetailsCard/ContactDetailsCard";

const Home = () => {
  const cardObject = [{"birthDates": "10/10/2000" ,"email":"mikolaj@gmail.com" , "mobileNumber" : "07424020033","bookingDate":"20/10/2000" ,"bookingTime":"11:20","staffMember":"staff01"}]

  return (
    <div className="app-container">
      <NavContainer />
      <Layout>
        <PageHeader headerType="headingOnly" heading="Home" />
        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
          dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
          maxime tempora, temporibus beatae voluptas repellat rerum.
          Dignissimos, necessitatibus.
        </p>
        <div>
        <BookingDetailsCard cardObject = {cardObject} />
      <ContactDetailsCard cardObject = {cardObject} />
      </div>
      </Layout>
    </div>
  );
};

export default Home;
