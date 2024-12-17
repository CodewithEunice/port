"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const projectsData = [
  {
    id: 1,
    title: "E-Shop",
    description:
      "E-Shop is an E-commerce web application that enables  to buy different electronic gadgets at the comfort of their homes.",
    image: "/images/projects/mike.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://just-electronics.onrender.com/",
  },
  {
    id: 2,
    title: "Dateme",
    description:
      "Dateme is a web dating application that allows  from different countries or continent to find love, make friends and meet new people. It makes it easier to find soul mate ",
    image: "/images/projects/dateme.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://dateme.onrender.com",
  },

  {
    id: 3,
    title: "Eko Hotel",
    description:
      "This is a simple landing page for potential customers/guests to make their Hotel Reservations seamlessly.",
    image: "/images/projects/ekoh.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://eko-oeaw.vercel.app",
  },
  {
    id: 4,
    title: "Calc project",
    description: "This is a simple calculator.",
    image: "/images/projects/calcImg.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://new-calc-project.vercel.app/",
  },

  {
    id: 5,
    title: "Aenon-fitness",
    description: "This is a fitness app that helps  register for gym classes.",
    image: "/images/projects/aenon.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://aenon-fitness.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
