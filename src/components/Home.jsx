import React,{useEffect, useState} from 'react'
import styles from './Home.module.css'
import Navbar from './navbar/Navbar'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Contact from './contact/Contact'



export default function Home() {
    return (
        <>
            <div className={styles.HomeBox} id='/'>
                <div className={styles.Navbar}>
                    <Navbar />
                </div>
                <div className={styles.linklogo}>
                    <a href="www.youtube.com/@CODEATEASE131" target='_blank'><div className={styles.youtube}><i className="fa-brands fa-youtube"></i></div></a>
                    <a href="https://github.com/allAboutManas" target='_blank'><div className={styles.github}><i className="fa-brands fa-github"></i></div></a>
                    <a href="https://www.linkedin.com/in/manas-raj-a34125293/" target='_blank'><div className={styles.linkedin}><i className="fa-brands fa-linkedin"></i></div></a>
                    <a href="mailto:rm.manasraj@gmail.com" target='_blank'><div className={styles.mail}><i className="fa-solid fa-envelope"></i></div></a>
                    <a href="https://wa.me/6204528912?text=Hi"><div className={styles.phone} target='_blank'><i className="fa-brands fa-square-whatsapp"></i></div></a>
                </div>
                <div className={styles.info}>
                    <div className={styles.intro}>
                        <span id='myname'><span className={styles.p}  id='myname'>I AM MANAS RAJ </span><br />
                            & I AM A</span> WEB DEVELOPER.
                    </div>
                    <div className={styles.SelfIntro}>
                        I'm passionate about creating visually stunning designs that capture attention and tell compelling stories. With a background in graphic design and illustration, I specialize in bringing ideas to life through digital and print media.
                    </div>
                    <a href="#about"><button className={styles.mywork}>Explore</button></a>
                    <div className={styles.arrow}><span>⬇︎</span></div>
                </div>
            </div>
            <div className={styles.About}>
                <About />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </>
    )
}
