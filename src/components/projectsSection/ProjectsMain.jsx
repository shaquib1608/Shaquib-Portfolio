import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Blog App",
    year: "Jan 2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://github.com/shaquib1608/Blog-App",
  },
  {
    name: "Social Media",
    year: "March 2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://github.com/shaquib1608/Blog-App",
  },
  {
    name: "Ecommerce",
    year: "Jan 2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/shaquib1608/Blog-App",
  },
  {
    name: "Study Hub",
    year: "Feb 2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://github.com/shaquib1608/Blog-App",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
