import Nav from "../components/nav";
import Footer from "../components/footer";
import Logo from "../components/logo";
import { NavLink } from "remix";

export default function Index() {
  return (
    <>
      <Logo />
      <div className="md:container mx-auto p-6 w-11/12 md:w-[740px] bg-black/[.375] md:bg-black/50 md:mt-24 lg:mt-0">
        <div>
          <h2 className="font-bold text-xl mb-6">
            THEY SAY THAT THE GREATEST LIE SATAN EVER TOLD WAS THAT HE NEVER
            EXISTED
          </h2>
          <p>
            Out of the promise of a decentralized system &mdash; finance,
            business, commerce, government, religion &mdash; rose a darkness. An
            unexpected cloud.
          </p>
          <p>
            But one so insidious, so hidden that most never even noticed. A
            darkness so complete that no one even suspected. Until it was too
            late&nbsp;&hellip;
          </p>
          <p>
            But one man caught a flash of the light and from that, felt the
            darkness.
          </p>
          <p>
            Now, against this darkness &hellip; against evil so ensconced that
            it is buried deep in the inner fabric that holds our world, our
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
        <div className="max-w-sm mx-auto mt-8 md:mb-12">
          <p className="italic">
            It began one early Spring day, bringing with it the promise of a
            fresh start after a long, harsh winter.
          </p>
          <p className="italic">And a dead body on his floor.</p>
          <p className="text-center mt-6 text-sm md:text-base">
            Read &#10132;{" "}
            <a
              href="https://mirror.xyz/0x839846a00f25f01DcB7446A50C92AfB5B24E1b03/qW03oE20ZQmD6z8jRUnMBkjpMfplkUoI0IEIE90Txl4"
              className="italic underline bold text-base md:text-xl"
              target="_blank"
              rel="noreferrer"
            >
              LIKE A MOTH TO A FLAME
            </a>
          </p>
          {/* <img src="/img/moth3b.png" alt="" /> */}
        </div>
      </div>
      <Nav />
      <Footer />
    </>
  );
}
