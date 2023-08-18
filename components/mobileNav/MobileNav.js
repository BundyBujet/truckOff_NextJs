"use client";
import Link from "next/link";
import style from "./MobileNav.module.css";
import MobileMenu from "../mobileMenu/MobileMenu";
import { useState } from "react";

const MobileNav = () => {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive((current) => !current);
  };

  return (
    <>
      <nav className={style.mobileNav}>
        <div className={style.logo}>
          <Link href="/">TruckOff</Link>
        </div>
        <div className={style.hamburger} onClick={handleClick}>
          <div
            className={isActive ? style.line : `${style.line} ${style.open}`}
          ></div>
        </div>
      </nav>
      <MobileMenu show={isActive ? false : true} />
    </>
  );
};

export default MobileNav;
