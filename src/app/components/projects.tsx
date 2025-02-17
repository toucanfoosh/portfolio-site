import { describe } from "node:test";
import Project from "./project";

export default function Projects(): React.ReactElement {
  const projectList = [
    {
      name: "llm-jailbreak",
      description:
        "A npm package that uses a neural network to check whether a given string is likely to be an 'llm jailbreak' string or not.",
      skills: "Python, PyTorch, Neural Networks, Typescript, Node.js",
      image: "/images/npm.png",
      imagedesc: "llm-jailbreak NPM Project Thumbnail Image",
      caption: "Click for the NPM Page",
      link: "https://www.npmjs.com/package/llm-jailbreak",
    },
    {
      name: "Brain Tumor MRI Classification",
      description:
        "This project aimed to increase the accuracy of a CNN model to correctly identify tumor presence in MR images by using a combination of a GAN and transfer learning vs conventional methods.",
      skills: "PyTorch, TensorFlow, CNNs, GANs, Transfer Learning",
      image: "/images/mriclassification.png",
      imagedesc: "MRI Classification Project Thumbnail Image",
      caption: "Click for the Github Repository",
      link: "https://github.com/shelton-je/BrainTumorMRIClassification",
      download: "/pdfs/mriclassification.pdf",
      downloadName: "mriclassification.pdf",
      downloadcaption: "Download the project report",
    },
    {
      name: "ThermaSense",
      description:
        "Prototype website for a project to predict current month heating costs for a given zip code.",
      skills: "React, Next, Tailwind, Typescript, Python, Tensorflow, Pandas",
      image: "/images/ThermaSense.png",
      imagedesc: "ThermaSense Project Thumbnail Image",
      caption: "Click for the website",
      link: "https://thermasense.netlify.app/",
    },
    {
      name: "Remolist",
      description:
        "Job board that specializes in helping find remote listings.",
      skills:
        "React, Next, Google Cloud, Firebase, Web Scraping, Tailwind, Typescript, Python",
      image: "/images/Remolist.png",
      imagedesc: "Remolist Project Thumbnail Image",
      caption: "Click for the website",
      link: "https://remolist.com/",
    },
    {
      name: "3D2Text",
      description:
        "This project aimed to help me get more familiar with some applied linear algebra and geometry to generate a 2d text representation of 3d objects.",
      skills: "Typescript, Matrix Math, React, File Parsing",
      image: "/images/3d2text.png",
      imagedesc: "3D2Text Project Thumbnail Image",
      caption: "Click for the website",
      link: "https://www.3d2text.com/",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center w-[100%]">
      {projectList.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          skills={project.skills}
          image={project.image}
          imagedesc={project.imagedesc}
          caption={project.caption}
          link={project.link}
          download={project.download}
          downloadName={project.downloadName}
          downloadcaption={project.downloadcaption}
        />
      ))}
    </div>
  );
}
