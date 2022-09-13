import React from 'react'
import Header from '../../Components/Header'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contact.css'



const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" > 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Dolores expedita beatae saepe vero sint officiis, ipsam voluptatum atque minima? Reiciendis!
    </Header>
    <section className="contect">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:manshumehra3@outlook.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achievers" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="http://wa.me/+919999999999" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>

    </>
    )
}

export default Contact