import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './EducationTips.module.css'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const EducationTips = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const education = () => {
      navigate('/education')
   }
   const experience = () => {
      navigate('/experience')
   }
   return (
      <div>
         <GlobalStyle />
         <div className={classes.container}>
            <h2 className={classes.live_funnel}>
               {t('education-tips.next-section')}
            </h2>
            <div className={classes.experienceH1}>
               <h1>{t('education-tips.main_text')}</h1>
            </div>
            <ul>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/1-cute.png"
                     alt=""
                  />
                  <span>{t('education-tips.tips_item1')}</span>
               </li>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/2-cute.png"
                     alt=""
                  />
                  <span>{t('education-tips.tips_item2')}</span>
               </li>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/3-cute.png"
                     alt=""
                  />
                  <span>{t('education-tips.tips_item3')}</span>
               </li>
            </ul>
            <div className={classes.buttons}>
               <button onClick={experience} className={classes.logout}>
                  <p>{t('education-tips.logout')}</p>
               </button>
               <button className={classes.next} onClick={education}>
                  <p> {t('education-tips.next')}</p>
               </button>
            </div>
         </div>
      </div>
   )
}

export default EducationTips
