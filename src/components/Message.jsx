import React from 'react'
import '../styles/message.css'
import { IoCloseCircle } from "react-icons/io5";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Message = ({SetSubmitted}) => {
  const handleClose = () => {
    SetSubmitted(false);
  }
  return (
    <div className='message-container'>
      <div className='message-wrapper'>
      <IoCloseCircle className='close' onClick={handleClose}/>
      <div>
      <FaEnvelopeCircleCheck className='message-icon'/>
      <h2>Message Sent!</h2>
      <p>Thank you for reaching out, a response will be sent shortly. In the meantime, kindly check projects I’ve worked on.</p>
      <Link to = '/projects'><button className='projects-btn' onClick={handleClose}>Go to Projects</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Message