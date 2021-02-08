import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <div className={utilStyles.about}>
          <p>I like building enterprise grade applications from scratch</p>
          <p>Full Stack Developer, Linux/System Administrator, Site Reliabilty Engineer.</p>
          <p>Works as Member of Technical Staff @ SCM-Team, VMware</p>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
        <h2 className={utilStyles.headingLg}>My Skills</h2>
        <Skills />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <Projects />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
        <h2 className={utilStyles.headingLg}>Contact Me ?</h2>
        <Contact />
      </section>
        <h4 className={utilStyles.graymatter}> &#x24B8; {' '} Kartikeyan Gupta</h4>
    </Layout>
  )
}