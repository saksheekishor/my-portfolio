import styles from './expAchievement.module.css'
import Link from 'next/link'

function getExperience(joining,ending){
    if ( ending === null) 
        ending = new Date()
    let diff = Math.floor(ending.getTime() - joining.getTime())
    let totalDays = 1000 * 60 * 60 * 24;
    let months = Math.floor((diff/totalDays)/31)
    let years = Math.floor(months/12)
    if (years>=1) {
        months = months - (years*12)
    }
    let experience = ''  
    return years + ' Years ' + months + ' Months'
}


export default function ExpAchievemt({ allSkillImages }) {
    return (
      <div className={styles.container}>
          <div className={styles.row}>
            <img className={styles.logo} src='/images/experiences/vmware.svg' alt='vmware'/>
            <div className={styles.secondarycontainer}>
                <h3> {getExperience(new Date("2020-01-10"), null)} </h3>
                <p> Working as SCM Administator / Site Reliability Engineer, maintains SCM applications/Dev-op tools including Gitlab, Perforce.</p>
                <p> Developed and maintains VMware specific Git application. </p>
            </div>
          </div>
          <div className={styles.row}>
            <img className={styles.certificate} src='/images/experiences/borathon-certificate.png' alt='borathon'/>
            <div className={styles.secondarycontainer}>
                <h3> March 2021 </h3>
                <p> Winner of Global Open-Source Borathon 2021.</p>
                <p> Contributed on zalando's kubernets postgres-operator. Fixed security issue increased unit test case coverage by 5%.</p>
                <p> Fixed security issue increased unit test case coverage by 5%.</p>
            </div>
          </div>
          <div className={styles.row}>
            <img className={styles.certificate} src='/images/experiences/sih-certificate.png' alt='sih'/>
            <div className={styles.secondarycontainer}>
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