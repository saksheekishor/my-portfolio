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
          src="/images/experiences/infosys.svg"
          alt="vmware"
        />
        <div className={styles.secondarycontainer}>
          <h3> {getExperience(new Date("2021-03-01"), null)} </h3>
          <p>
            {" "}
            Working as System Engineer, develops and maintain full working
            application written on S4 HANA.
          </p>
          <p> Working as applications developer for ICICI Bank, Hyderabad . </p>
        </div>
      </div>
    </div>
  );
}
