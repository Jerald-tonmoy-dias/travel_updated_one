import React, { useContext } from "react";
import styled from "styled-components";
import Summary from "./component/summary/Summary";

import Header from "./component/layout/Header";
import Travel from "./component/travel/Travel";
import { StoreContext } from "./context/Store";
import Footer from "./component/layout/Footer";

function App() {
  // get context value
  let { countSteps } = useContext(StoreContext);

  // display content
  const displayComponent = () => {
    switch (countSteps) {
      case 1:
        return <Travel />;
      case 2:
        return <Summary />;
      default:
        return <Travel />;
    }
  };

  return (
    <>
      <Header />
      {displayComponent()}
      {/* <Footer /> */}
    </>
  );
}

export default App;
