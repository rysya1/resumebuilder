import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './ExperienceTips.module.css'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const ExperienceTips = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const contact = () => {
      navigate('/contact')
   }
   const experience = () => {
      navigate('/experience')
   }
   return (
      <div>
         <GlobalStyle />
         <div className={classes.container}>
            <h2 className={classes.live_funnel}>
               {t('experience-tips.next-section')}
            </h2>
            <div className={classes.experienceH1}>
               <h1>{t('experience-tips.main_text')}</h1>
            </div>
            <ul>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/1-cute.png"
                     alt=""
                  />
                  <span>{t('experience-tips.tips_item1')}</span>
               </li>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/2-cute.png"
                     alt=""
                  />
                  <span>{t('experience-tips.tips_item2')}</span>
               </li>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/3-cute.png"
                     alt=""
                  />
                  <span>{t('experience-tips.tips_item4')}</span>
               </li>
            </ul>
            <div className={classes.buttons}>
               <button onClick={contact} className={classes.logout}>
                  <p>{t('experience-tips.logout')}</p>
               </button>
               <button className={classes.next} onClick={experience}>
                  <p>{t('experience-tips.next')}</p>
               </button>
            </div>
         </div>
      </div>
   )
}

export default ExperienceTips
