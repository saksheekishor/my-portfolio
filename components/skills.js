import styles from './skills.module.css'


export default function Skills() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
              <img
                src="/images/skills/python.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/linux.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/bash.svg"
                className={styles.logo}
              />
        </div>
        <div className={styles.row}>
              <img
                src="/images/skills/django.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/docker.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/git.svg"
                className={styles.logo}
              />
          </div>
          <div className={styles.row}>
              <img
                src="/images/skills/gitlab.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/javascript.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/nginx.svg"
                className={styles.logo}
              />
          </div>
          <div className={styles.row}>
              <img
                src="/images/skills/react.svg"
                className={styles.logo}
              />
              <img
                src="/images/skills/raspberry-pi.svg"
                className={styles.logo}
              />
            </div>
        </div>
    )
  }