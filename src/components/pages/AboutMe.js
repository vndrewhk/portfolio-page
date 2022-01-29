import styles from './pages.module.css'

const AboutMe = ()=>{
    return  <div className={styles.main}>
    <div className={styles.intro}>
      <h1>Andrew Ma</h1>
      <p1 className={styles.paragraph}>
        A Mechanical Engineer turned Front-end Developer. Experienced in
        Javascript, CSS, HTML5, React.js, and Node.js.
      </p1>
    </div>

   {/* <Projects></Projects> */}
  </div> 
    // <>About Me</>
}

export default AboutMe