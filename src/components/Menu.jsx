import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import Download from './Download';

const Menu = ({setisshow}) => {
    const [isDownload, SetisDownload] = useState(false)

    const closeMenu = () => {
        setisshow(false)
    }

    const DisplayDownload = () => {
        SetisDownload(true)
    }
  return (
    <div className= 'menu-container'>
    <div className='menu-wrapper flex'>
        <div className="logo">
            <IoClose className='menu-close' onClick={closeMenu}/>
        <Link to='/'>
          <h2 className="logo">Adriana.</h2>
        </Link>
        </div>
        <div className='flex links'>
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
        </div>
    </div>
    {isDownload ? <Download SetisDownload={SetisDownload}/> : ''}
    </div>
  )
}

export default Menu