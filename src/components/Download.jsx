import React from 'react'
import '../styles/download.css'
import Pers from '../assets/person-img.svg'
import { FaDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const Download = ({SetisDownload}) => {

  const handleClose = () => {
    SetisDownload(false)
  }

  const openDownloadDirectory = () => {
    window.showOpenFilePicker()
    // console.log("clicked");
  }


  return (
    <div className="download-container">
    <div className='download-wrapper'>
      <IoCloseCircle className='close' onClick={handleClose}/>
      <div>
      <FaDownload className='download-icon'/>
      <a href= {Pers} download>Mubarak’s Resume.pdf</a>
      <h2>Download In Progress!</h2>
      <p>Kindly check your downloads for the downloaded file.</p>
      <button className='download-btn' onClick={openDownloadDirectory}>Go to Downloads</button>
      </div>
    </div>
    </div>
  )
}

export default Download