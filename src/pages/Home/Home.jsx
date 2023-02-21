import DataCard from "../../components/DataCard/DataCard";
import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
const Home = () => {
  return (
    <div className="app-container">
      <NavContainer />
      <Layout>
        <DataCard
          name={"Test"}
          email={"hello"}
          mobileNumber={2423789}
          isConsumer={true}
          isEmployed={false}
          courseName={"whatever"}
        />
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
