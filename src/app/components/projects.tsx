import { describe } from "node:test";
import Project from "./project";

export default function Projects(): React.ReactElement {
  const projectList = [
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
