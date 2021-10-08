import React, { memo } from "react";
import { useLocation } from "react-router";
import { linkData } from "./linkData";
import { style } from "./style";

const TopNav = memo(() => {
  const location = useLocation();

  const checkURL = (arg) => {
    if (location.pathname === arg) return true;
    return false;
  };

  return (
    <nav className={style.navClass}>
      {/* <div className={style.container}> */}
      <a className={style.logo} href="/">
        Ready Wealth
      </a>
      <button
        className={style.toggle}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className={style.toggleIcon} />
      </button>
      <div className={style.collapse} id="navbarSupportedContent">
        <ul className={style.navUL}>
          {linkData.map(({ id, link, title }) => (
            <li
              key={id}
              className={checkURL(link) ? style.navLIActive : style.navItem}
            >
              <a className={style.navLink} href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <button className={style.btn} type="submit">
          Log In
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
});

export default TopNav;
