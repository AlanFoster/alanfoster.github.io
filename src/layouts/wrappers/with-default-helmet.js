import React from "react";
import Helmet from "react-helmet";

const metadata = {
  name: "Alan Foster",
  website: "alanfoster.me",
  description:
    "This is the blog of Alan Foster; a developer with a passion for learning new programming languages, frameworks, and paradigms."
};

const DefaultHelmet = ({ children }) => (
  <div>
    <Helmet
      titleTemplate={`%s | ${metadata.website}`}
      title="Welcome"
      meta={[
        {
          name: "description",
          content: metadata.description
        }
      ]}
    />
    {children}
  </div>
);

export default DefaultHelmet;
