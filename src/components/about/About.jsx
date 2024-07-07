import React from 'react'
import styles from './About.module.css'
import pic from '../assets/profile.png'

export default function About() {
  return (

    <div className={styles.AboutBox} id='about'>
      <div className={styles.pic}><img src={pic} alt="image1" />
        <div>
          <div className={styles.knowAbout}>
            <div className={styles.knowinfo}><span>Know</span><br /> About Me</div><br />
            <div className={styles.AboutSec}>
            <p>As an aspiring web developer with a strong foundation in HTML, CSS, JavaScript, Java, ReactJS, and various libraries, I am eager to kickstart my career in the exciting world of technology. My passion for web development ignited during self-paced learning and hands-on projects, where I discovered the thrill of bringing ideas to life through code.</p>
            <p>What motivates me most about web development is the opportunity for perpetual growth and innovation. I am committed to staying abreast of the latest industry trends, experimenting with new tools and frameworks, and pushing the boundaries of my abilities to deliver cutting-edge solutions.</p>
            
            </div>
          <div className={styles.aboutbtn}>
            <a href="#contact"><button>Contact Me</button></a>
            <a href="https://drive.google.com/file/d/10h-Lgvc6Vy46MBBwyIX-dvy0drRKTmoU/view?usp=drive_link" target='_blank' rel="noreferrer"><button>My Resume</button></a>
          </div>
        </div></div>
      </div>
    </div>
  )
}
