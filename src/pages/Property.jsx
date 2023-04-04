import React from "react";
import Property from "../components/Property";
import Data from "../data/logements";

const property = () => {
  return (
    <div>
      <Property data={Data} />
    </div>
  );
};

export default property;