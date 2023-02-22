import React from "react";
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
            buttonText={"Edit"}
            handleClick={() => console.log("Create")}
            isPlus={true}
          />
        </header>
        <ClientOverview />
      </main>
    </div>
  );
};

export default Client;
