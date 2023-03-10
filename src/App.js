import { useState, useEffect } from "react";

import { HeroComponent } from "./Components/hero-component";
import { NavBarComponent } from "./Components/nav-bar";
import { MainComponent } from "./Components/main-component";

import "./App.css";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const clickMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  return (
    <div className="App">
      <NavBarComponent
        showMobileMenu={showMobileMenu}
        clickMobileMenuHandler={clickMobileMenuHandler}
      />
      <HeroComponent />
      <MainComponent />
    </div>
  );
}

export default App;

/* 
git clone git@github.com:kamiliano1/room-homepage.git
*/
