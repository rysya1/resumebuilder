import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './Education.module.css'
import ResumePreview from '../ResumePreview/ResumePreview'
import { userActions } from '../../features/user/userSlice'
import { toggleActions } from '../../features/toggle/toggleSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Education = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { toggleState } = useSelector((state) => state.toggle)
   const finish = () => {
      dispatch(toggleActions.hideEdit())
      navigate('/finish')
   }
   const skillTips = () => {
      navigate('/skill-tips')
   }
   const educationTips = () => {
      navigate('/education-tips')
   }

   const schoolNameHandler = (e) => {
      dispatch(userActions.setSchoolName(e.target.value))
   }
   const degreeHandler = (e) => {
      dispatch(userActions.setDegree(e.target.value))
   }
   const cityHandler = (e) => {
      dispatch(userActions.setCityEducation(e.target.value))
   }
   const stateHandler = (e) => {
      dispatch(userActions.setStateEducation(e.target.value))
   }
   const startDateHandler = (e) => {
      dispatch(userActions.setStartDateEducation(e.target.value))
   }
   const expirationDateHandler = (e) => {
      dispatch(userActions.setExpirationDateEducation(e.target.value))
   }
   const studyHandler = (e) => {
      dispatch(userActions.setStudy(e.target.value))
   }
   const descriptionHandler = (e) => {
      dispatch(userActions.setDescriptionEducation(e.target.value))
   }
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div className={classes.container}>
               <div className={classes.education_text}>
                  <h1>{t('education.main_text')}</h1>
                  <span>{t('education.Ltsbz')}</span>
               </div>
               <div>
                  <div className={classes.pAndInput}>
                     <p>{t('education.name')}</p>
                     <input type="text" onChange={schoolNameHandler} />
                  </div>
                  <div className={classes.d_flex}>
                     <div className={classes.city}>
                        <p>{t('education.city')}</p>
                        <input type="text" onChange={cityHandler} />
                     </div>
                     <div className={classes.state}>
                        <p>{t('education.state')}</p>
                        <input type="text" onChange={stateHandler} />
                     </div>
                  </div>
                  <div className={classes.options}>
                     <p>{t('education.options')}</p>
                     <select onChange={degreeHandler}>
                        <option>{t('education.option1')}</option>
                        <option>{t('education.option2')}</option>
                        <option>{t('education.option3')}</option>
                        <option>{t('education.option4')}</option>
                        <option>{t('education.option5')}</option>
                        <option>{t('education.option6')}</option>
                        <option>{t('education.option7')}</option>
                        <option>{t('education.option8')}</option>
                        <option>{t('education.option9')}</option>
                        <option>{t('education.option10')}</option>
                        <option>{t('education.option11')}</option>
                        <option>{t('education.option12')}</option>
                        <option>{t('education.option13')}</option>
                        <option>{t('education.option14')}</option>
                        <option>{t('education.option15')}</option>
                     </select>
                  </div>
                  <div className={classes.pAndInput}>
                     <p>{t('education.area-study')}</p>
                     <input type="text" onChange={studyHandler} />
                  </div>
                  <div className={classes.d_flex_date}>
                     <div>
                        <p>{t('education.start-date')}</p>
                        <input
                           className={classes.date}
                           type="date"
                           onChange={startDateHandler}
                        />
                     </div>
                     <div>
                        <p>{t('education.expiration-date')}</p>
                        <input
                           className={classes.date}
                           type="date"
                           onChange={expirationDateHandler}
                        />
                     </div>
                  </div>
                  <div className={classes.pAndTextArea}>
                     <p>{t('education.description')}</p>
                     <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={descriptionHandler}
                     />
                  </div>
               </div>
               {!toggleState && (
                  <div className={classes.buttons}>
                     <button className={classes.logout} onClick={educationTips}>
                        <p>{t('education.logout')}</p>
                     </button>
                     <button onClick={skillTips} className={classes.next}>
                        <p>{t('education.next')}</p>
                     </button>
                  </div>
               )}
               {toggleState && (
                  <div className={classes.buttons}>
                     <button onClick={finish} className={classes.next}>
                        <p>{t('finish.finish')}</p>
                     </button>
                  </div>
               )}
            </div>
            <div>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Education
