import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './Experience.module.css'
import ResumePreview from '../ResumePreview/ResumePreview'
import { userActions } from '../../features/user/userSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Experience = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
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
                     <input type="text" onChange={workNameHandler} />
                  </div>

                  <div className={classes.pAndInput}>
                     <p>{t('experience.employer')}</p>
                     <input type="text" onChange={employerHandler}/>
                  </div>

                  <div className={classes.d_flex}>
                     <div className={classes.city}>
                        <p>{t('experience.city')}</p>
                        <input type="text" onChange={cityHandler}/>
                     </div>
                     <div className={classes.state}>
                        <p>{t('experience.state')}</p>
                        <input type="text" onChange={stateHandler}/>
                     </div>
                  </div>
                  <div className={classes.d_flex_date}>
                     <div>
                        <p>{t('experience.start-date')}</p>
                        <input className={classes.date} type="date" onChange={startDateHandler}/>
                     </div>
                     <div>
                        <p>{t('experience.expiration-date')}</p>
                        <input className={classes.date} type="date" onChange={expirationDateHandler}/>
         
                     </div>
                  </div>
                  <div className={classes.pAndTextArea}>
                     <p>{t('experience.description')}</p>
                     <textarea name="" id="" cols="30" rows="10" onChange={descriptionHandler}/>
                  </div>
               </div>
               <div className={classes.buttons}>
                  <button className={classes.logout} onClick={experienceTips}>
                     <p>{t('experience.logout')}</p>
                  </button>
                  <button className={classes.next} onClick={educationTips}>
                     <p>{t('experience.next')}</p>
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

export default Experience
