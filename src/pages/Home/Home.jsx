import DataCard from "../../components/DataCard/DataCard";
import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
const Home = () => {
  const studentTestObject = {
    name: "Test",
    email: "hello",
    mobileNumber: 2423789,
    isConsumer: true,
    isEmployed: false,
    courseName: "whatever",
  };

  const resourceTestObject = {
    resourceName: "Syringes",
    quantity: 30,
    cost: "£12.99",
    isAutoPurchase: true,
    autoPurchaseLevel: 50,
  };

  const bookingTestObject = {
    name: "BookingTest",
    email: "hello",
    mobileNumber: 2423789,
    bookingDate: "12/03/2023",
    bookingTime: "12:30",
  };

  return (
    <div className="app-container">
      <NavContainer />
      <Layout>
        <DataCard cardType={"resource"} cardObject={resourceTestObject} />
        <DataCard cardType={"student"} cardObject={studentTestObject} />
        <DataCard cardType={"booking"} cardObject={bookingTestObject} />
        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error dolor
          in nostrum minima odio a fuga saepe soluta adipisci perspiciatis maxime
          tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
          necessitatibus.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
