import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
export default RootLayout;
