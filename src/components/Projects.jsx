import React from "react";
import "../styles/projects.css";
import project from "../JS/project";
import { BsEnvelope, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Aside from "./Aside";

const Projects = () => {
  return (
    <section className="project-container flex">
      {/* <Aside /> */}
      <div className="project-wrapper">
        {
          project.map((p) => {
            const {id, stack, color, projectName, github_Url, web_Url} = p;

            return <div className="project" key={id}>
            <p className= {`stack ${color}`}> {stack }</p>
  
            <h2> {projectName }</h2>
            <div className="flex ex-link">
            <a href= {github_Url} className="flex extra-links">
                  <BsGithub /> Github <BsBoxArrowUpRight />
                </a>
                <a href= {web_Url} className="flex extra-links">
                  <TbWorld /> Website <BsBoxArrowUpRight />
                </a>
            </div>
          </div> 

          })
        }
      </div>
    </section>
  );
};

export default Projects;



