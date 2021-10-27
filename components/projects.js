import styles from "./projects.module.css";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/projects/project1.png"
          alt="project1"
        />
        <div className={styles.secondarycontainer}>
          <h3> Power Controling Device</h3>
          <p>
            {" "}
            A Digital Power Control Device using PWM which can be used to
            control the output parameters like.
          </p>
          <p>
            {" "}
            Speed, Heat & Light Intensity by maximizing a device’s efficiency{" "}
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/projects/project2.png"
          alt="project2"
        />
        <div className={styles.secondarycontainer}>
          <h3> Multipurpose Swarm Robots </h3>
          <p>
            {" "}
            Multipurpose Swarm Robots, which will provide the possibility of
            enhanced task
          </p>
          <p>
            performance, high reliability, low unit complexity, and decreased
            cost over traditional robotics systems.
          </p>
        </div>
      </div>
    </div>
  );
}
