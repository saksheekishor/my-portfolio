import styles from "./expAchievement.module.css";
import Link from "next/link";

function getExperience(joining, ending) {
  if (ending === null) ending = new Date();
  let diff = Math.floor(ending.getTime() - joining.getTime());
  let totalDays = 1000 * 60 * 60 * 24;
  let months = Math.floor(diff / totalDays / 31);
  let years = Math.floor(months / 12);
  if (years >= 1) {
    months = months - years * 12;
  }
  let experience = "";
  return years + " Years " + months + " Months";
}

export default function ExpAchievemt({ allSkillImages }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/experiences/infosys.png"
          alt="infosys"
        />
        <div className={styles.secondarycontainer}>
          <h3> {getExperience(new Date("2021-03-01"), null)} </h3>
          <p>
            {" "}
            Working as System Engineer,I develop and maintain full working
            applications written on S4 HANA.
          </p>
          <p> Developing applications for ICICI Bank, Hyderabad. </p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/experiences/IETE.png"
          alt="IETE"
        />
        <div className={styles.secondarycontainer}>
          <h3> September 2020 </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedlaboris
            nisi ut aliquip ex ea commodo consequat
          </p>
          <p>do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/experiences/AICTE.jpeg"
          alt="AICTE"
        />
        <div className={styles.secondarycontainer}>
          <h3> March 2020 </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedlaboris
            nisi ut aliquip ex ea commodo consequa{" "}
          </p>
          <p>do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          className={styles.logo}
          src="/images/experiences/BSNL.jpeg"
          alt="BSNL"
        />
        <div className={styles.secondarycontainer}>
          <h3> January 2019 </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedlaboris
            nisi ut aliquip ex ea commodo consequat{" "}
          </p>
          <p>do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>
  );
}
