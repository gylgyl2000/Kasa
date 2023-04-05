import React from "react";
import Property from "../components/Property/Property";
import Data from "../data/logements";

const Properties = () => {
  return (
    <div>
      <Property data={Data} />
    </div>
  );
};

export default Properties;