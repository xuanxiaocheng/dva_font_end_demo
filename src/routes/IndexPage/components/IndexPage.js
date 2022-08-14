import React from "react";
import { connect } from "dva";

function IndexPage() {
  return (
    <div style={{ fontWeight: "600", fontSize: "30px", marginTop: "100px" }}>
      I am IndexPage by Dva-hierarchical-route
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
