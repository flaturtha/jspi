import { Link } from "remix";

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-4xl uppercase font-chakra drop-shadow-lg container mx-auto mt-6 mb-4 md:mt-12 md:mb-4 text-center md:text-left md:ml-24">
        <span className="bg-black/[0.125]">Joe Sputnik, PI</span>
      </h1>
    </Link>
  );
}
