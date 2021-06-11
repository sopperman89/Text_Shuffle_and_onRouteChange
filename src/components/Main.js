import React from "react";
import "../styles.css";

const Main = ({ textThatChanges, onRouteChange }) => {
  return (
    <section className="Main">
      <h1>Hello, my name is (Name Here)</h1>
      <h3>
        I am <span>{textThatChanges}</span>
      </h3>
      <div id="buttons">
        <button
          onClick={() => onRouteChange("Information")}
          className="me"
          type="submit"
        >
          View my work!
        </button>
      </div>
    </section>
  );
};

export default Main;
