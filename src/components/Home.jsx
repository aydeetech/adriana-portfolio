import React, { useState } from "react";
import "../styles/home.css";
import HeroImg from "../assets/hero-img.svg"
import HtmlImg from "../assets/html.svg"
import PersonImg from "../assets/person-img.svg"
import CssImg from "../assets/css.svg"
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { DiNodejsSmall,DiJsBadge,DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { BsEnvelope,BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import Download from "./Download";
import Menu from "./Menu";




const Home = () => {
  const [isDownload, SetisDownload] = useState(false)
  const [isshowMenu, setisShowMenu] = useState(false)

  const DisplayDownload = () => {
      SetisDownload(true)
  }

  const ShowMenu = () => {
    setisShowMenu(true)
  }


  return (
    <section className="home-container">
      <header className="flex">
        <Link to='/'>
          <h2 className="logo">Adriana.</h2>
        </Link>

        <nav>
          <ul className="flex">
            <li>
              <Link to= '/user/projects'>Projects</Link>
            </li>
            <li>
              <Link onClick={DisplayDownload}>Download Resume</Link>
            </li>
            <li>
              <Link to= '/user/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <TiThMenu className= {isshowMenu ? 'hidden ham' : 'hidden ham'} onClick={ShowMenu}/>
        
      </header>
      {isshowMenu ? <Menu setisshow = {setisShowMenu} SetisDownload={SetisDownload}/> : null}
      <div className="hero-wrapper flex">
        <div className="hero-text">
          <p className="job-field">Full Stack Developer</p>

          <h1>Adriana McTominay</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
            tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
            nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
            dolor eget. Orci in enim sit luctus lacus arcu.
          </p>

          <div className="language-icons flex">
            <FaBootstrap className="bootstrap"/> <DiNodejsSmall className="node"/> <img src= {HtmlImg} alt="Html5" /> <DiJsBadge className="javascript"/> <DiReact className="react"/> <img src= {CssImg} alt="CSS3" />
          </div>
          <div className="socials flex">
        <img src= {PersonImg} alt="My Image" />
        <a href="mailto:ayomidefaseun1267@gmail.com" className="flex"><BsEnvelope /> Email <BsBoxArrowUpRight /></a>
        <a href="http://www.github.com" className="flex"><BsGithub /> Github <BsBoxArrowUpRight /></a>
      </div>
        </div>

        <div className="hero-img">
            <img src= {HeroImg} alt="Hero-Img" />
        </div>
      </div>
     {isDownload ? <Download SetisDownload={SetisDownload}/> : ''}
     
    </section>
  );
};

export default Home;
