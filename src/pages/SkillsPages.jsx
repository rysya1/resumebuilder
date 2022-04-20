import React, { useEffect } from 'react'
import Skills from '../components/Skills/Skills'
// import { useSelector } from 'react-redux'
const SkillsPages = () => {
   // const skills = useSelector((state) => state.skills.skills)
   // useEffect(() => {
   // 	localStorage.setItem('skills', JSON.stringify(skills))
   // }, [skills])
   // useEffect(() => {
   // 	JSON.parse(window.localStorage.getItem('skills'))
   // }, [skills])
   return (
      <div>
         <Skills />
      </div>
   )
}

export default SkillsPages
