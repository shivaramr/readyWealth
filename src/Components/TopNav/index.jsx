import React, { memo } from "react";
import { style } from "./style";

const TopNav = memo(function TopNav() {
  return (
    <nav class={style.navClass}>
      <div class={style.container}>
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
            <li class={style.navLIActive}>
              <a class={style.navLink} href="/">
                Home
              </a>
            </li>
            <li class={style.navItem}>
              <a class={style.navLink} href="/aboutUs">
                About Us
              </a>
            </li>
            <li class={style.navItem}>
              <a class={style.navLink} href="/services">
                Services
              </a>
            </li>
            <li class={style.navItem}>
              <a class={style.navLink} href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <button class={style.btn} type="submit">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
});

export default TopNav;
