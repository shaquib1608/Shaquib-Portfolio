// import { Link } from "react-scroll";

// const AboutMeText = () => {
//   return (
//     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
//       <h2 className="text-6xl text-cyan mb-10">About Me</h2>
//       <p>
//         I’m M D Shaquib Jahangir, holding a Bachelor of Technology in Computer Science from Lovely Professional University, where I established a robust foundation in programming and software development. Throughout my academic journey, I attained proficiency in C++, Java, and Python, and delved into web technologies frameworks such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I applied these competencies in various projects. Furthermore, I ventured into web development by undertaking several frontend and backend projects, which are detailed below. This experience enabled me to refine my skills in designing and developing user-centric websites and enhancing user experience. I am passionate about learning new technologies and frameworks, and I am eager to contribute to a dynamic team.
//       </p>
//       <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
//         <Link
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-120}
//           to="projects"
//           className="cursor-pointer text-white hover:text-black transition-all duration-500"
//         >
//           My Projects
//         </Link>

//       </button>

//       <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
//         <p className="cursor-pointer text-white hover:text-black transition-all duration-500">Resume</p>
//       </button>
//     </div>
//   );
// };

// export default AboutMeText;


import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m M D Shaquib Jahangir, holding a Bachelor of Technology in Computer Science from Lovely Professional University, where I established a robust foundation in programming and software development. Throughout my academic journey, I attained proficiency in C++, Java, and Python, and delved into web technologies frameworks such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I applied these competencies in various projects. Furthermore, I ventured into web development by undertaking several frontend and backend projects, which are detailed below. This experience enabled me to refine my skills in designing and developing user-centric websites and enhancing user experience. I am passionate about learning new technologies and frameworks, and I am eager to contribute to a dynamic team.
      </p>
      <div className="flex gap-10 mt-10">
        {/* My Projects Button */}
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-black transition-all duration-500"
          >
            My Projects
          </Link>
        </button>


        <a
          href="/resume.pdf"
          download="M_D_Shaquib_Resume.pdf" // Custom file name when downloaded
          // target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black"
        >
          Download Resume
        </a>
      </div>


    </div>
  );
};

export default AboutMeText;
