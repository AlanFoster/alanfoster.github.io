import Layout from "components/layouts/main";
import React from "react";

const About = () => (
  <Layout>
    <div>
      <p>
        Welcome! This is the blog of Alan Foster; a developer with a passion for
        learning new programming languages, frameworks, and paradigms.
      </p>

      <p>Recently I’ve been looking into:</p>

      <ul>
        <li>Front-end Technologies - ReactJS, AngularJS, BackBone</li>
        <li>Back-end Technologies - Ruby, Rails</li>
        <li>Functional Programming - Scala, Haskell</li>
        <li>Compiler Theory</li>
      </ul>

      <p>
        You can see what I’ve been up to on Github{" "}
        <a href="https://www.github.com/alanfoster">@alanfoster</a>
      </p>
    </div>
  </Layout>
);

export default About;
