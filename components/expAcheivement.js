import styles from './expAchievement.module.css'

// Work in progress
function generate_component(){
    let companyName = []
    let roleDescription = []
    let experiencePeriod = []
    let achievementName = []
    let year = []
    let achievementDescription = []
    let component = []
}

export default function ExpAchievemt({ allSkillImages }) {
    return (
      <div className={styles.container}>
          <div className={styles.row}>
            <img className={styles.logo} src='/images/experiences/vmware.svg' alt='vmware'/>
            <div className={styles.container}>
                <h3> 1 years 2 months </h3>
                <p> Working as SCM Administator / Site Reliability Engineer, maintains SCM applications/Dev-op tools including Gitlab, Perforce.</p>
                <p> Developed and maintains VMware specific Git application. </p>
            </div>
          </div>
          <div className={styles.row}>
            <img className={styles.logo} src='/images/experiences/sih.svg' alt='vmware'/>
            <div className={styles.container}>
                <h3> March 2019 </h3>
                <p> Finalist of annually held SIH by Government of India.</p>
                <p> Team Leader. </p>
                <p> Developed a solution using deep learning to automate the process of government infrastructure projects inspection. </p>
                <p> Track the project's progress/status.</p>
            </div>
          </div>
        {/* {generate_component(allSkillImages.length, allSkillImages)}     */}
     </div>
    )
  }