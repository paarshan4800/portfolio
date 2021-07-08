import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet
      meta={[
        {
          name: "description",
          content:
            "My name is Paargav Shanker. I am studying Computer Science and Engineering at College of Engineering, Guindy. This is my Portfolio.",
        },
        {
          property: `og:title`,
          content: "Paargav Shanker",
        },
        {
          property: `og:description`,
          content:
            "My name is Paargav Shanker. I am studying Computer Science and Engineering at College of Engineering, Guindy. This is my Portfolio.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
