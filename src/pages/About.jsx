import React from "react";
import Banner from "../components/Banner/Banner";
import CollapseCard from "../components/Collapse/Collapse";
import styles from "../components/Banner/Banner.module.css"

const About = () => {
  return (
    <div className="aboutCard">
      <Banner 
        // title=""
        classBanner={styles.about_banner} />
      <CollapseCard />
    </div>
  );
};

export default About;