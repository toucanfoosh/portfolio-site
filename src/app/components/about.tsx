import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function About(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-5 text-center bg-black/25 backdrop-blur">
      <h1 className={`text-5xl md:text-7xl font-bold font-basement pb-5  px-5`}>
        About
      </h1>
      <div className={`text-xl md:text-2xl pb-5 px-5 ${raleway.className}`}>
        <p>Heyo 👋!</p>
        <p>
          My name is Daniel and I am a Master&apos;s student at Northeastern
          University studying Computer Science and graduating in the Fall of
          2025. I have passion and experience in both front-end engineering and
          AI/ML. If you need anything from me feel free to reach out!
        </p>
        <div className="hidden lg:flex text-2xl flex-row justify-around items-center pt-10">
          <div
            onClick={() =>
              window.open("https://github.com/toucanfoosh", "_blank")
            }
            className="flex flex-row justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <FaGithub className="pe-2 scale-150" />
            Github
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/toucanfish/", "_blank")
            }
            className="flex flex-row justify-center items-center cursor-pointer  hover:scale-110 transition-transform"
          >
            <FaLinkedin className="pe-2 scale-150" />
            LinkedIn
          </div>
          <div className="flex flex-row justify-center items-center">
            <IoMail className="pe-2 scale-150" />
            danielwu.toucan at gmail.com
          </div>
        </div>
      </div>
      <div className="flex lg:hidden text-2xl flex-col justify-around items-center pt-8">
        <div
          onClick={() =>
            window.open("https://github.com/toucanfoosh", "_blank")
          }
          className="pb-2 text-base sm:text-2xl flex flex-row justify-center items-center cursor-pointer hover:scale-110 transition-transform"
        >
          <FaGithub className="pe-2 scale-150" />
          Github
        </div>
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/toucanfish/", "_blank")
          }
          className="pb-2 text-base sm:text-2xl flex flex-row justify-center items-center cursor-pointer  hover:scale-110 transition-transform"
        >
          <FaLinkedin className="pe-2 scale-150" />
          LinkedIn
        </div>
        <div className="pb-2 text-base sm:text-2xl flex flex-row justify-center items-center">
          <IoMail className="pe-2 scale-150" />
          danielwu.toucan at gmail.com
        </div>
      </div>
    </div>
  );
}
