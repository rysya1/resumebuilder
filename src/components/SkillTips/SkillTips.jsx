import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import classes from './SkillTips.module.css'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const SkillTips = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const education = () => {
      navigate('/education')
   }
   const skills = () => {
      navigate('/skills')
   }
   return (
      <div>
         <GlobalStyle />
         <div className={classes.container}>
            <h2 className={classes.live_funnel}>
               {t('skill-tips.next-section')}
            </h2>
            <div className={classes.experienceH1}>
               <h1>{t('skill-tips.main_text')}</h1>
            </div>
            <ul>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/1-cute.png"
                     alt=""
                  />
                  <span>{t('skill-tips.tips_item1')}</span>
               </li>
               <li className={classes.tips_item}>
                  <img
                     src="https://img.icons8.com/color/48/000000/2-cute.png"
                     alt=""
                  />
                  <span>{t('skill-tips.tips_item2')}</span>
               </li>
            </ul>
            <div className={classes.buttons}>
               <button onClick={education} className={classes.logout}>
                  <p>{t('skill-tips.logout')}</p>
               </button>
               <button onClick={skills} className={classes.next}>
                  <p>{t('skill-tips.next')}</p>
               </button>
            </div>
         </div>
      </div>
   )
}

export default SkillTips
