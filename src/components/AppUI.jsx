import React from "react";
import Header from "./Header";
import Main from "./Main";
import OpenCard from "./OpenCard";
import { ReactContext } from "./ReactContext";
function AppUI() {
  const {
    onModal
  } = React.useContext(ReactContext)
  return (
    <React.Fragment>
      {onModal && <OpenCard />}
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default AppUI;