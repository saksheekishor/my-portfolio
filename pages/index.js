import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import ExpAchievemt from "../components/expAcheivement";
import { getSkillsData } from "../lib/loadimages";

export async function getStaticProps() {
  const allSkillImages = getSkillsData();
  return {
    props: {
      allSkillImages,
    },
  };
}

function aboutMe() {
  let component = [];
  let about = [
    "Have a hands on working experience on S4 HANA",
    "A Cloud-architect enthusiast",
    "Works as System Engineer @ ABAP-Team, Infosys",
  ];
  for (let i = 0; i < about.length; i++) {
    component.push(<p>{about[i]}</p>);
  }
  return component;
}

export default function Home({ allSkillImages }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}
      >
        <h2 className={utilStyles.headingLg}>About</h2>
        <div className={utilStyles.about}>{aboutMe()}</div>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}
      >
        <h2 className={utilStyles.headingLg}>My Skills</h2>
        <Skills allSkillImages={allSkillImages} />
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}
      >
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <Projects />
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}
      >
        <h2 className={utilStyles.headingLg}>
          My Experiences and Achievements
        </h2>
        <ExpAchievemt />
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}
      >
        <h2 className={utilStyles.headingLg}>Contact Me ?</h2>
        <Contact />
      </section>
      <h4 className={utilStyles.graymatter}>
        {" "}
        &#x24B8; Sakshee Pochampalliwar
      </h4>
    </Layout>
  );
}
