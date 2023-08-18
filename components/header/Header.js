import style from "./Header.module.css";
import MobileNav from "../mobileNav/MobileNav";
import DesktopNav from "../disktopNav/DisktopNav";

const Header = () => {
  return (
    <header className={style.header}>
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
