import styles from './skills.module.css'

function generate_component(totalSkills, allSkillImages){
  let images = []
  let i = 0
  while(i < totalSkills) {
    let children = []
    for (let j = 0; j < 3; j++) {
        if (i < totalSkills) {
        children.push( <div>
                  <img key= {allSkillImages[i].id} src={allSkillImages[i].fullPath} alt={allSkillImages[i].id} className={styles.logo}/>
                  {/* <p className={styles.paragraph}> {allSkillImages[i].id} </p> */}
                  </div>
                  )
        }
        else {
          break;
        }
        i++;
      }
    images.push(<div className={styles.row}>{children}</div>)
    }
    return images
}


export default function Skills({ allSkillImages }) {
    return (
      <div className={styles.container}>
        {generate_component(allSkillImages.length, allSkillImages)}    
     </div>
    )
  }