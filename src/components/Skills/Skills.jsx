import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { createGlobalStyle } from 'styled-components'
import { addSkill } from '../../features/skill/skillSlice'
import AddSkillsForm from '../AddSkillsForm/AddSkillsForm'
import ResumePreview from '../ResumePreview/ResumePreview'
import classes from './Skills.module.css'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Skills = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [title, setTitle] = useState('')
   const skills = useSelector((state) => state.skills.skills)

   const skillsTips = () => {
      navigate('/skill-tips')
   }
   const finish = () => {
      navigate('/finish')
   }
   const skillsChangeHandler = (e) => {
      setTitle(e.target.value)
   }

   const submitHandler = () => {
      const skill = {
         id: v4(),
         text: title,
      }

      if (title.trim().length > 0) {
         dispatch(addSkill(skill))
      }

      setTitle('')
   }
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div className={classes.container}>
               <div className={classes.skills_text}>
                  <h1>{t('skills.main_text')}</h1>{' '}
                  <span>{t('skills.Ltsbz')}</span>
               </div>
               <div className={classes.pAndInput}>
                  <p>{t('skills.name')}</p>
                  <div className={classes.d_flex}>
                     <input
                        value={title}
                        type="text"
                        placeholder={t('skills.main_text')}
                        onChange={skillsChangeHandler}
                     />
                     <button
                        className={classes.buttonAdd}
                        onClick={() => submitHandler()}
                     >
                        <span>{t('skills.add')}</span>
                     </button>
                  </div>
               </div>
               <div className={classes.skills}>
                  {skills.map((skill) => (
                     <AddSkillsForm key={skill.id} skill={skill} />
                  ))}
               </div>

               <div className={classes.buttons}>
                  <button className={classes.logout} onClick={skillsTips}>
                     <p>{t('skills.logout')}</p>
                  </button>
                  <button onClick={finish} className={classes.next}>
                     <p>{t('skills.next')}</p>
                  </button>
               </div>
            </div>
            <div>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Skills
