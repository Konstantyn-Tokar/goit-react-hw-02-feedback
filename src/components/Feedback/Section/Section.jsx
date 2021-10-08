import React from "react";
// import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
