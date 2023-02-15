export const NavBarComponent = ({ showMobileMenu, clickMobileMenuHandler }) => {
  return (
    <div className="div">
      <nav className="nav">
        <img
          src="images/icon-hamburger.svg"
          alt=""
          className="ham"
          onClick={clickMobileMenuHandler}
        />
        <img src="images/logo.svg" alt="" />
      </nav>
      {showMobileMenu ? (
        <div className="mobile-menu">
          <div className="mobile-menu-div">
            <div>
              <img
                src="images/icon-close.svg"
                alt=""
                onClick={clickMobileMenuHandler}
              />
              <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
