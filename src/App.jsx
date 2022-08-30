import React from "react";
import AppUI from "./components/AppUI";
import { TodoProvider } from "./components/ReactContext";

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;