import { lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
