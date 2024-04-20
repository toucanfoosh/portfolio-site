import Project from "./project";

export default function Projects(): React.ReactElement {
  const projectList = [
    {
      name: "Brain Tumor MRI Classification",
      description:
        "This project aimed to increase the sensitivity and accuracy of a CNN model to correctly identify the presence of a tumor in a MR image by using a combination of a GAN and transfer learning over normal approaches, such as only using a CNN with no extra data or other basic classification methods.",
      skills: "Python, PyTorch, TensorFlow, CNNs, GANs, Transfer Learning",
      image: "/images/MRIClassification.png",
      imagedesc: "MRI Classification Project Thumbnail Image",
      link: "https://github.com/shelton-je/BrainTumorMRIClassification",
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
          link={project.link}
        />
      ))}
    </div>
  );
}
