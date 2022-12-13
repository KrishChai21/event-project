import React, { Fragment } from "react";
import Header from "./Header";

// Receiving page props
function Layout(props) {
  return (
    <Fragment>
      <Header />
      {/* props.children represents the actual content of the page */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
