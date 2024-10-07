import Logo from "./Logo";
import NavList from "./NavList";
import TopBar from "./TopBar";

const MainNavigation = () => {
  return (
    <header className="main-navigation">
      <Logo />
      <div className="navigation-wrapper">
        <TopBar />
        <nav>
          <NavList />
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
