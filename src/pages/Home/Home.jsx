import Layout from "../../components/Layout/Layout";
// import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const Home = () => {
  return (
    <div className="app-container">
      {/* <NavContainer /> */}
      <Layout>
        <PageHeader
          heading="Home"
          headerType="headingButtonDropdown"
          optionsArr={[]}
        />

        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
          dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
          maxime tempora, temporibus beatae voluptas repellat rerum.
          Dignissimos, necessitatibus.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
