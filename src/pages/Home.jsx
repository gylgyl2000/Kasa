import React from "react";
import Cards from "../components/Cards/Cards";
import Banner from "../components/Banner/Banner";
import Data from "../data/logements";
import styles from "../components/Banner/Banner.module.css"

const Home = () => {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        classBanner={styles.home_banner}
      />
      <Cards data={Data} />
    </div>
  );
};

export default Home;