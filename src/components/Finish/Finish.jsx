import React, { useEffect } from 'react'
import { Preview, print } from 'react-html2pdf'
import { useTranslation } from 'react-i18next'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ResumePreview from '../ResumePreview/ResumePreview'
import classes from './Finish.module.css'
import contacts from '../../assets/icons/contacts.svg'
import suitcasesolid from '../../assets/icons/suitcase-solid.svg'
import books from '../../assets/icons/bookshelf.svg'
import menu from '../../assets/icons/menu.svg'
import newsticker from '../../assets/icons/fiber-new.svg'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Finish = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const contact = () => {
      navigate('/contact')
   }
   const experience = () => {
      navigate('/experience')
   }
   const education = () => {
      navigate('/education')
   }
   const skills = () => {
      navigate('/skills')
   }
   const download = () => {
      print('a', 'resume')
   }

   const newResume = () => {
      window.location.reload()
      localStorage.removeItem('skills')
      localStorage.removeItem('content')
   }
   const localSkills = localStorage.getItem('skills')
   const localContent = localStorage.getItem('content')
   useEffect(() => {
      if (!localContent && !localSkills) {
         navigate('/main')
      }
   }, [localSkills, localContent])
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div>
               <Preview className={classes.a} id="resume">
                  <ResumePreview />
               </Preview>
            </div>
            <div className={classes.container}>
               <div className={classes.finish_styled}>
                  <div className={classes.finish_main_text}>
                     <h1>{t('finish.your-resume')}</h1>
                  </div>
                  <div className={classes.download}>
                     <button onClick={download}>
                        <i className="fa fa-ad"></i>
                        <span>{t('finish.download')}</span>
                     </button>
                  </div>
                  <div className={classes.resume_sections}>
                     <div className={classes.resume_sections_text}>
                        <span>{t('finish.summary')}</span>
                     </div>
                     <div>
                        <div
                           onClick={contact}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img
                                 src={contacts}
                                 alt=""
                              />
                              <span>{t('contacts.main_text')}</span>
                           </div>
                        </div>
                        <div
                           onClick={experience}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img
                                 src={suitcasesolid}
                                 alt=""
                              />
                              <span>{t('experience.main_text')}</span>
                           </div>
                        </div>
                        <div
                           onClick={education}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img
                                 src={books}
                                 alt=""
                              />
                              <span>{t('education.main_text')}</span>
                           </div>
                        </div>
                        <div
                           onClick={skills}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img
                                 src={menu}
                                 alt=""
                              />
                              <span>{t('skills.main_text')}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <button className={classes.button} onClick={newResume}>
                     <span className={classes.text}>
                        {t('finish.new-resume')}
                     </span>
                     <span className={classes.icon}>
                        <img
                           src={newsticker}
                           alt=""
                        />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Finish
