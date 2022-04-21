import React from 'react'
import { useTranslation } from 'react-i18next'
import Constructor from '../../UI/Constructor/Constructor'
import classes from './MainPageForm.module.css'

const MainPageForm = () => {
   const { t } = useTranslation()
   return (
      <div>
         <section className={classes.container}>
            <div>
               <h1 className={classes.build_the_resume}>
                  {t('main.main_text')}
               </h1>
               <div className={classes.subtitle}>
                  <font className={classes.jumbotron__subtitle}>
                     {t('main.subtitle')}
                  </font>
               </div>
            </div>
            <Constructor />
            <div className={classes.resume_img}>
               <img
                  src="https://resume-example.com/wp-content/uploads/2021/03/budapest-half.png"
                  alt="a"
               />
            </div>
            <div className={classes.advantages}>
               <div className={classes.jumbotron__advantages}>
                  <div className={classes.wrapper__advantages}>
                     <div className={classes.flex_end}>
                        <div>
                           <p className={classes.jumbotron__advantages__text}>
                              {t('main.advantages__text1')}
                           </p>
                           <p className={classes.jumbotron__advantages__p}>
                              {t('main.advantages__text2')}
                           </p>
                        </div>
                        <div>
                           <p className={classes.jumbotron__advantages__text}>
                              {t('main.advantages__text3')}
                           </p>
                           <p className={classes.jumbotron__advantages__p}>
                              {t('main.advantages__text4')}
                           </p>
                        </div>
                     </div>
                     <div className={classes.flex_start}>
                        <div>
                           <p className={classes.jumbotron__advantages__text}>
                              {t('main.advantages__text5')}
                           </p>
                           <p className={classes.jumbotron__advantages__p}>
                              {t('main.advantages__text6')}
                           </p>
                        </div>
                        <div>
                           <p className={classes.jumbotron__advantages__text}>
                              {t('main.advantages__text7')}
                           </p>
                           <p className={classes.jumbotron__advantages__p}>
                              {t('main.advantages__text8')}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default MainPageForm
