import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Header from "./components/Header";

import './sass/main.scss'; 

function App() {
  return <>
  <div className="header"><Header /></div>
  <div className="container">
    <div className="horizontal-scroll-wrapper">
      <div><Homepage /></div>
      <div><Works /></div>
      <div><About /></div>
      <div><Contact /></div>
    </div>
  </div>
  </>
  ;
}

export default App;
