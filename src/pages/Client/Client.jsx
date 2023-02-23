import React from "react";
import home from "../../assets/images/functional-icons/black-home-icon.png";
import Button from "../../components/Button/Button";
import ClientOverview from "../../containers/ClientOverview/ClientOverview";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Client.scss";
const Client = () => {
  return (
    <div className="client-page">
      <NavContainer />
      <main className="client-page__content">
        <header className="client-page__header">
          <h1 className="client-page__title">Clients</h1>
          <Button
            buttonText={"Create"}
            handleClick={() => console.log("Create")}
            isPlus={true}
          />
        </header>
        <ClientOverview />
        <div className="client-page__button">
          <Button
            buttonText={"Create client"}
            handleClick={() => console.log("Create")}
            isPlus={false}
          />
        </div>
        <footer className="client-page__footer">
          <img src={home} alt="home page image" />
        </footer>
      </main>
    </div>
  );
};

export default Client;
