import { Link } from "remix";

export default function Index() {
  return (
    <>
      <h1 className="text-4xl uppercase font-chakra drop-shadow-lg container mx-auto mt-6 mb-4 md:mt-12 md:mb-4 text-center md:text-left">
        Joe Sputnik, PI
      </h1>
      <div className="container mx-auto p-6 w-11/12 md:w-[740px] bg-black/50">
        <div>
          <h2 className="font-bold text-xl mb-6">
            THEY SAY THAT THE GREATEST LIE SATAN EVER TOLD WAS THAT HE NEVER
            EXISTED
          </h2>
          <p>
            Out of the promise of a decentralized system &mdash; finance,
            business, commerce, goverment, religion &mdash; rose a darkness. An
            unexpected cloud.
          </p>
          <p>
            But one so indisious, so hidden that most never even noticed. A
            darkness so complete that no one even suspected. Until it was too
            late &hellip;
          </p>
          <p>
            But one man caught a flash of the light and from that, felt the
            darkness
          </p>
          <p>
            Now, against this darkness &hellip; against evil so ensconced that
            it is buried eep in the inner fabric that holds our world, our
            society together &hellip; against this thing stands one man.
          </p>
          <p className="mt-6">
            <strong>
              JOE SPUTNIK, PI
              <br />
              NEW YORK CITY &ndash; 2047
            </strong>
          </p>
        </div>
        <hr className="my-8 w-8/12 mx-auto md:border-2" />
        <div className="max-w-sm mx-auto mt-8 mb-12">
          <p className="italic">
            It began one early Spring day, bringing with it the promise of a
            fresh start after a long, harsh winter.
          </p>
          <p className="italic">And a dead body on his floor.</p>
          <p className="text-center mt-6 text-sm md:text-base">
            Read &rarr;{" "}
            <span className="italic underline bold text-base md:text-xl">
              LIKE A MOTH TO A FLAME
            </span>
          </p>
        </div>
      </div>
      <nav className="my-8 mx-auto">
        <ul className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16 space-y-8 md:space-y-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="discord">Discord</Link>
          </li>
          <li>
            <Link to="twitter">Twitter</Link>
          </li>
          <li>
            <Link to="mirror">Mirror.xyz</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
