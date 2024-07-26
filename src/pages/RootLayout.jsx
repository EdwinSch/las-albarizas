import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const RootLayout = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <main>
      <nav className={toggleNav ? "nav-wrapper nav-open" : "nav-wrapper"}>
        nav menu
      </nav>
      <button
        onClick={() => setToggleNav(!toggleNav)}
        className="nav-btn"
        type="button"
      >
        <IoMenu />
      </button>
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};
export default RootLayout;
