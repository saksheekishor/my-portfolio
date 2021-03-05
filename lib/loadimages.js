// import fs from 'fs'
// import path from 'path'

const fs = require('fs');
const path = require('path');

const skillsDirectoryRelative = '/images/skills'
// const projectsDirectoryRelative = '/images/projects'
const parentDirectory = 'public'
const skillsDirectory = path.join(process.cwd(), parentDirectory+skillsDirectoryRelative)
// const projectsDirectory = path.join(process.cwd(), parentDirectory+projectsDirectoryRelative)

export function getSkillsData() {
  // Get image name
  const imageNames = fs.readdirSync(skillsDirectory)
  const allImagesData = imageNames.map(fileName => {  
    const id = fileName.replace(/\.svg$/, '')
    const fullPath = skillsDirectoryRelative+'/'+fileName
    return {
      id,
      fullPath
    }
  })
  return allImagesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}