import React from "react"
import Link from "gatsby-link";
import "prismjs/themes/prism-tomorrow.css";

export default ({ children }) =>{
  return (
    <div>
      <div>
        <h1>Alan Foster</h1>
        <Link to="/">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/talks">Talks</Link>
      </div>

      {children()}
    </div>
  );
}
