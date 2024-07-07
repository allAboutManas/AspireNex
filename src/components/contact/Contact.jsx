import React, { useState } from 'react'
import styles from './Contact.module.css'
import picture from "../assets/picture.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  

  const warning = (message) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const error = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const success = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  

 
  

  return (
    <div className={styles.ContactBox} id='contact'>
      <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      <span className={styles.color}>Bhudeo Krit</span>
      <div className={styles.bigbox}>
        <div className={styles.formpart}>
          <div>
            <div className={styles.my}>My</div>
            <div className={styles.skill}>Contact</div>
            <div className={styles.form}>
              <form action="">
                <div className={styles.name}>
                  <label htmlFor="name">NAME</label><br />
                  <input type="text" id='name' placeholder='ENTER YOUR NAME'  /><br />
                </div>
                <div className={styles.cont}>
                  <div>
                    <label htmlFor="phone">PHONE NUMBER</label><br />
                    <input type="text" id='phone' className={styles.number} placeholder='ENTER YOUR PHONE NUMBER'   />
                  </div>
                  <div>
                    <label htmlFor="email">EMAIL</label><br />
                    <input type="email" id='email' className={styles.email} placeholder='ENTER YOUR EMAIL ADDRESS'  />
                  </div>
                </div>
                <div className={styles.message}>
                  <label htmlFor="message">YOUR MESSAGE</label><br />
                  <textarea name="" id="message" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE'  ></textarea>
                </div>
                <button >SEND MESSAGE</button>
              </form>
            </div>
          </div>
          <div className={styles.pic}>
            <img src={picture} alt="Conpic" />
          </div>
        </div>
      </div>
    </div>
  )
}
