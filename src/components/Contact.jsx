import React, { useState } from 'react'
import '../styles/contact.css'
import Aside from './Aside'
import Message from './Message'

const Contact = () => {
  const [submitted, SetSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    SetSubmitted(true)
    console.log("clicked");

  }
  return (
    <section className='contact-container flex'>
      {/* <Aside /> */}
      
      <div className="contact-wrapper">
          <h2>Send A Message</h2>

          <form>
            <input type="text" placeholder='From:' />
            <input type="text" placeholder='Subject:' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Write Messsage...'></textarea>
            <button onClick={handleSubmit}>Send Message</button>
          </form>
      </div>

    {submitted ? <Message SetSubmitted = {SetSubmitted}/> : ''}
    </section>
  )
}

export default Contact