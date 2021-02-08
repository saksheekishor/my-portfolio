import styles from './contact.module.css'


export default function Skills() {
    return (
      <div className={styles.container}>
          <form>
            <input type="text" className={styles.feedbackinput} placeholder="Name" />   
            <input type="text" className={styles.feedbackinput} placeholder="Email" />
            <textarea name="text" className={styles.feedbackinput} placeholder="Comment"></textarea>
            <input type="submit" className={styles.submit} value="Ping Me"/>
          </form>
          <div className={styles.row}>
              <a href="https://www.linkedin.com/in/kartikeyan-sachin-gupta-207273185/">
              <img
                src="/images/contacts/linkedin.svg"
                className={styles.logo}
              />
              </a>
              <a href="mailto:kartikeyangupta123@gmail.com">
              <img
                src="/images/contacts/gmail.svg"
                className={styles.logo}
              />
              </a>
              <a href="https://github.com/kartikeyangupta">
              <img
                src="/images/contacts/github.svg"
                className={styles.logo}
              />
              </a>
            </div>
        </div>
    )
  }