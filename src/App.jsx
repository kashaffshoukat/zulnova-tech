import React, { useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Router from "./routes";
import ScrollReset from "./components/ScrollReset/ScrollReset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Router />
        <ScrollReset />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
