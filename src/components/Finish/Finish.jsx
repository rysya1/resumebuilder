import React from 'react'
import { Preview, print } from 'react-html2pdf'
import { useTranslation } from 'react-i18next'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ResumePreview from '../ResumePreview/ResumePreview'
import classes from './Finish.module.css'

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
                                 src="https://img.icons8.com/material-rounded/24/4bb0f6/contacts.png"
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
                                 src="https://img.icons8.com/windows/24/4bb0f6/school-backpack.png"
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
                                 src="https://img.icons8.com/windows/24/4bb0f6/books--v2.png"
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
                                 src="https://img.icons8.com/ios-filled/24/4bb0f6/menu-rounded.png"
                                 alt=""
                              />
                              <span>{t('skills.main_text')}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Finish
