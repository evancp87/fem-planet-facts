import Nav from "../Components/Nav";
import MobileNav from "../Components/MobileNav";
import Planet from "./Planet";

const Interface = () => {
  return (
    <section className=" bg-img minimum-height ">
      <Nav />
      <MobileNav />
      <Planet />
    </section>
  );
};

export default Interface;
