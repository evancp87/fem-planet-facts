import Nav from "../Components/Nav";
import MobileNav from "../Components/MobileNav";
import Planet from "./Planet";

const Layout = ({ children }) => {
  return (
    <section className=" bg-img minimum-height ">
      <Nav />
      <MobileNav />
      <Planet />
    </section>
  );
};

export default Layout;
