import style from "./DisktopNav.module.css";

const DisktopNav = () => {
  return (
    <nav className={style.desktopNav}>
      <div className={style.logo}>
        <a href="/">TruckOff</a>
      </div>
      <ul className={style.navigation}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#">About Us</a>
        </li>
        <li>
          <a href="/trucks">Trucks</a>
        </li>
        <li>
          <a href="/#">Finance</a>
        </li>
      </ul>
    </nav>
  );
};

export default DisktopNav;
