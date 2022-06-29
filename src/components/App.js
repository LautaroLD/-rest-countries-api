import React from "react";
import Header from "./Header";
import Main from "./Main";
import { TodoProvider } from "./ReactContext";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Main />
    </TodoProvider>
  );
}

export default App;