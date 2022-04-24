import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './Experience.module.css'
import ResumePreview from '../ResumePreview/ResumePreview'
import { userActions } from '../../features/user/userSlice'
import { toggleActions } from '../../features/toggle/toggleSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Experience = () => {
   const { t } = useTranslation()
   const {
      workName,
      employer,
      cityExperience,
      stateExperience,
      startDate,
      expirationDate,
      description,
   } = useSelector((state) => state.user.content.experience)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [toggle, setToggle] = useState(
      localStorage.getItem('toggleState')
         ? JSON.parse(localStorage.getItem('toggleState'))
         : true
   )
   const finish = () => {
      dispatch(toggleActions.hideEdit())
      navigate('/finish')
      setToggle()
   }
   const experienceTips = () => {
      navigate('/experience-tips')
   }
   const educationTips = () => {
      navigate('/education-tips')
   }
   const workNameHandler = (e) => {
      dispatch(userActions.setWorkName(e.target.value))
   }
   const employerHandler = (e) => {
      dispatch(userActions.setEmployer(e.target.value))
   }
   const cityHandler = (e) => {
      dispatch(userActions.setCityExperience(e.target.value))
   }
   const stateHandler = (e) => {
      dispatch(userActions.setStateExperience(e.target.value))
   }
   const startDateHandler = (e) => {
      dispatch(userActions.setStartDate(e.target.value))
   }
   const expirationDateHandler = (e) => {
      dispatch(userActions.setExpirationDate(e.target.value))
   }
   const descriptionHandler = (e) => {
      dispatch(userActions.setDescription(e.target.value))
   }
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div className={classes.container}>
               <div className={classes.experience_text}>
                  <h1>{t('experience.main_text')}</h1>
                  <span>{t('experience.Ltsbz')}</span>
               </div>
               <div>
                  <div className={classes.pAndInput}>
                     <p>{t('experience.name')}</p>
                     <input maxLength="48" type="text" value={workName} onChange={workNameHandler} />
                  </div>

                  <div className={classes.pAndInput}>
                     <p>{t('experience.employer')}</p>
                     <input maxLength="48" type="text" value={employer} onChange={employerHandler} />
                  </div>

                  <div className={classes.d_flex}>
                     <div className={classes.city}>
                        <p>{t('experience.city')}</p>
                        <input maxLength="48" type="text" value={cityExperience} onChange={cityHandler} />
                     </div>
                     <div className={classes.state}>
                        <p>{t('experience.state')}</p>
                        <input maxLength="48" type="text" value={stateExperience} onChange={stateHandler} />
                     </div>
                  </div>
                  <div className={classes.d_flex_date}>
                     <div>
                        <p>{t('experience.start-date')}</p>
                        <input
                           className={classes.date}
                           type="date"
                           value={startDate}
                           onChange={startDateHandler}
                        />
                     </div>
                     <div>
                        <p>{t('experience.expiration-date')}</p>
                        <input
                           className={classes.date}
                           type="date"
                           value={expirationDate}
                           onChange={expirationDateHandler}
                        />
                     </div>
                  </div>
                  <div className={classes.pAndTextArea}>
                     <p>{t('experience.description')}</p>
                     <textarea
                        cols="30"
                        rows="10"
                        maxLength="420"
                        value={description}
                        onChange={descriptionHandler}
                     />
                  </div>
               </div>
               {toggle === true && (
                  <div className={classes.buttons}>
                     <button
                        className={classes.logout}
                        onClick={experienceTips}
                     >
                        <p>{t('experience.logout')}</p>
                     </button>
                     <button className={classes.next} onClick={educationTips}>
                        <p>{t('experience.next')}</p>
                     </button>
                  </div>
               )}
               {toggle === false && (
                  <div className={classes.buttons}>
                     <button onClick={finish} className={classes.next}>
                        <p>{t('finish.finish')}</p>
                     </button>
                  </div>
               )}
            </div>
            <div className={classes.document_contaner}>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Experience
