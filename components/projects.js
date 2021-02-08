import styles from './projects.module.css'


export default function Skills() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
              <a href="https://github.com/kartikeyangupta/M-SKAM">
              <img
                src="/images/projects/project1.png"
                className={styles.logo}
              />
              </a>
              <a href="https://github.com/kartikeyangupta/KBC-Hack">
              <img
                src="/images/projects/project2.png"
                className={styles.logo}
              />
              </a>
            </div>
        </div>
    )
  }