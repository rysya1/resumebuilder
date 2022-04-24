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
import { toggleActions } from '../../features/toggle/toggleSlice'

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

   const [toggle, setToggle] = useState(
      localStorage.getItem('toggleState')
         ? JSON.parse(localStorage.getItem('toggleState'))
         : true
   )

   const finishNext = () => {
      localStorage.setItem('toggleState', JSON.stringify(false))
      navigate('/finish')
      setToggle()
   }
   const finish = () => {
      dispatch(toggleActions.hideEdit())
      navigate('/finish')
   }
   const skillsTips = () => {
      navigate('/skill-tips')
   }
   const submitHandler = (e) => {
      e.preventDefault()
      const skill = {
         id: v4(),
         text: title,
      }

      if (title.trim().length > 0) {
         dispatch(addSkill(skill))
      }

      setTitle('')
   }
   const skillsChangeHandler = (e) => {
      setTitle(e.target.value)
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
                  <form className={classes.d_flex} onSubmit={submitHandler}>
                     <input
                        value={title}
                        maxLength={70}
                        type="text"
                        placeholder={t('skills.main_text')}
                        onChange={skillsChangeHandler}
                     />
                     <button type="submit" className={classes.buttonAdd}>
                        <span>{t('skills.add')}</span>
                     </button>
                  </form>
               </div>
               <div className={classes.skills}>
                  {skills.map((skill) => (
                     <AddSkillsForm  key={skill.id} skill={skill} />
                  ))}
               </div>

               {toggle === true && (
                  <div className={classes.buttons}>
                     <div className={classes.buttons_children}>
                        <button className={classes.logout} onClick={skillsTips}>
                           <p>{t('skills.logout')}</p>
                        </button>
                        <button onClick={finishNext} className={classes.next}>
                           <p>{t('skills.next')}</p>
                        </button>
                     </div>
                  </div>
               )}
               {toggle === false && (
                  <div className={classes.buttons}>
                     <div className={classes.buttons_children}>
                        <button onClick={finish} className={classes.next}>
                           <p>{t('finish.finish')}</p>
                        </button>
                     </div>
                  </div>
               )}
            </div>
            <div className={classes.document_container}>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Skills
