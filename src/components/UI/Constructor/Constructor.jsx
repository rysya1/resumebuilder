import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import classes from './Constructor.module.css'

const Constructor = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const contact = () => {
      navigate('/contact')
   }
   return (
      <div className={classes.container} onClick={contact}>
         <div className={classes.constructor}>
            <img
               className={classes.icon_construct}
               src="https://img.icons8.com/pastel-glyph/64/ffffff/website-builder--v2.png"
               alt="icon"
            />
            <span className={classes.cta}>{t('constructor.start')}</span>
         </div>
      </div>
   )
}

export default Constructor
