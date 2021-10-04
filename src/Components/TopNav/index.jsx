import React, { memo } from "react";
import { useLocation } from "react-router";
import { linkData } from "./linkData";
import { style } from "./style";

const TopNav = memo(() => {
  const location = useLocation();

  const checkURL = (arg) => {
    console.log(location.pathname);
    if (location.pathname === arg) return true;
    return false;
  };

  return (
    <nav class={style.navClass}>
      {/* <div class={style.container}> */}
      <a class={style.logo} href="/">
        Ready Wealth
      </a>
      <button
        class={style.toggle}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class={style.toggleIcon} />
      </button>
      <div class={style.collapse} id="navbarSupportedContent">
        <ul class={style.navUL}>
          {linkData.map((ele, id) => (
            <li
              key={id}
              class={checkURL(ele.link) ? style.navLIActive : style.navItem}
            >
              <a class={style.navLink} href={ele.link}>
                {ele.title}
              </a>
            </li>
          ))}
        </ul>
        <button class={style.btn} type="submit">
          Log In
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
});

export default TopNav;
