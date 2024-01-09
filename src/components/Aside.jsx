import React, {useState} from 'react'
import PersonImg from "../assets/person-img.svg";
import { Link } from "react-router-dom";
import { BsEnvelope, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import Download from './Download';
import Menu from './Menu';

const Aside = ({children}) => {

  const [isDownload, SetisDownload] = useState(false)
  const [isshowMenu, setisShowMenu] = useState(false)

  const DisplayDownload = () => {
      SetisDownload(true)
  }

  const ShowMenu = () => {
    setisShowMenu(true)
  }
  return (
    <div className='extrapage-container flex'>
      <div className="project-main">
        <header className="flex">
          <Link to= '/'>
            <h2 className="logo">Adriana.</h2>
          </Link>


          <TiThMenu className= {isshowMenu ? 'hidden ham' : 'hidden ham'} onClick={ShowMenu}/>
        </header>

        <div className="hero-wrapper flex">
        {isshowMenu ? <Menu setisshow = {setisShowMenu}/> : null}
          <div className="hero-text">
            <p className="job-field">Full Stack Developer</p>

            <h1>Adriana McTominay</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>

            <ul className="body-link">
              <li>
                01 <div className="line"></div>
                <Link to="/user/projects">Projects</Link>
              </li>
              <li>
                02 <div className="line"></div><a href= {PersonImg} download onClick={DisplayDownload}>Download Resume</a>
              </li>
              <li>
                03 <div className="line"></div> <Link to= '/user/contact'>Contact</Link>
              </li>
            </ul>

            <div className="socials flex">
              <img src={PersonImg} alt="My Image" />
              <a href="mailto:ayomidefaseun1267@gmail.com" className="flex">
                <BsEnvelope /> Email <BsBoxArrowUpRight />
              </a>
              <a href="http://www.github.com" className="flex">
                <BsGithub /> Github <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
        {children}
      {isDownload ? <Download SetisDownload={SetisDownload}/> : null}
    </div>
  )
}

export default Aside