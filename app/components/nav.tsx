import { NavLink } from "remix";

export default function Nav() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "font-bold",
  };
  let activeClassName = "font-bold";
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:mt-28 lg:mt-12 py-4 text-center justify-center items-center space-x-0 md:space-x-24 space-y-8 md:space-y-0">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/roadmap"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Roadmap
      </NavLink>
      <NavLink
        to="/discord"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Discord
      </NavLink>
      <a href="https://twitter.com/ThePulpeteer" target="_blank">
        Twitter
      </a>
      <NavLink
        to="/mirror"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Mirror.xyz
      </NavLink>
    </div>
  );
}
