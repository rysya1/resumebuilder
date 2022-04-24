import React, { useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ResumePreview from '../ResumePreview/ResumePreview'
import classes from './Finish.module.css'
import contacts from '../../assets/icons/contacts.svg'
import suitcasesolid from '../../assets/icons/suitcase-solid.svg'
import books from '../../assets/icons/bookshelf.svg'
import menu from '../../assets/icons/menu.svg'
import newsticker from '../../assets/icons/fiber-new.svg'
import { toggleActions } from '../../features/toggle/toggleSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Finish = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const componentRef = useRef()
   const contact = () => {
      dispatch(toggleActions.showEdit())
      navigate('/contact')
   }
   const experience = () => {
      dispatch(toggleActions.showEdit())
      navigate('/experience')
   }

   const education = () => {
      dispatch(toggleActions.showEdit())
      navigate('/education')
   }

   const skills = () => {
      dispatch(toggleActions.showEdit())
      navigate('/skills')
   }

   const newResume = () => {
      window.location.reload()
      localStorage.removeItem('skills')
      localStorage.removeItem('content')
      localStorage.removeItem('toggleState')
   }
   const localSkills = localStorage.getItem('skills')
   const localContent = localStorage.getItem('content')
   useEffect(() => {
      if (!localContent && !localSkills) {
         navigate('/main')
      }
   }, [localSkills, localContent])
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div  className={classes.document_contaner}>
               <div ref={componentRef}>
                  <ResumePreview />
               </div>
            </div>
            <div className={classes.container}>
               <div className={classes.finish_styled}>
                  <div className={classes.finish_main_text}>
                     <h1>{t('finish.your-resume')}</h1>
                  </div>
                  <div className={classes.download}>
                     <button onClick={handlePrint}>
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
                              <img src={contacts} alt="" />
                              <span>{t('contacts.main_text')}</span>
                           </div>
                        </div>
                        <div
                           onClick={experience}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img src={suitcasesolid} alt="" />
                              <span>{t('experience.main_text')}</span>
                           </div>
                        </div>

                        <div
                           onClick={education}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img src={books} alt="book" />
                              <span>{t('education.main_text')}</span>
                           </div>
                        </div>

                        <div
                           onClick={skills}
                           className={classes.all_project_pages}
                        >
                           <div className={classes.sections}>
                              <img src={menu} alt="" />
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
                        <img src={newsticker} alt="" />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Finish
