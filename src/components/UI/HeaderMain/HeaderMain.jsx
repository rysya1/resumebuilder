import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../utils/i18next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import classes from './HeaderMain.module.css'

const language = [
   {
      code: 'en',
      country: 'English',
      icon: 'https://img.icons8.com/color/48/000000/usa.png',
   },
   {
      code: 'ru',
      country: 'Russian',
      icon: 'https://img.icons8.com/color/48/000000/russian-federation.png',
   },
]

const HeaderMain = () => {
   const navigate = useNavigate()
   const [showLng, setShowLng] = useState(false)
   const { t, i18n } = useTranslation()
   const showLanguageHandler = () => {
      setShowLng(true)
   }
   const languageChangeHandler = (lng) => {
      setShowLng(false)
      i18n.changeLanguage(lng)
   }
   const mainPage = () => {
      navigate('/main')
   }
   return (
      <header className={classes.header}>
         <div className={classes.header_div}>
            <div className={classes.main_name} onClick={mainPage}>
               <img
                  src="https://www.resumecoach.com/wp-content/themes/cv-wp-theme-resumecoach/library/images/logo-rc-home.png"
                  alt="РезюмеТренер"
                  width="160"
                  height="43"
               />
            </div>
            <div style={{ position: 'relative' }}>
               <SelectText>
                  <span>{t('header.languages')}</span>

                  <SelectLanguage
                     onClick={showLanguageHandler}
                     src="https://img.icons8.com/ios-glyphs/30/f42e2e/expand-arrow--v1.png"
                  />
               </SelectText>

               {showLng && (
                  <SelectContainer>
                     {language.map((el) => (
                        <SelectItem
                           onClick={() => languageChangeHandler(el.code)}
                        >
                           <SelectLanguage src={el.icon} alt={el.country} />
                           {el.country}
                        </SelectItem>
                     ))}
                  </SelectContainer>
               )}
            </div>
         </div>{' '}
      </header>
   )
}

const SelectLanguage = styled.img`
   width: 30px;
   height: 30px;
   cursor: pointer;
`
const SelectText = styled.div`
   padding-top: 10px;
   display: flex;
   align-items: center;
   span {
      font-weight: 700;
      font-size: 17px;
      color: #f42e2e;
   }
`
const SelectContainer = styled.div`
   width: 200px;
   padding: 0.3rem;
   background-color: whitesmoke;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
   position: absolute;
   right: -50px;
   animation: yes ease-in-out 0.4s;
   @keyframes yes {
      0% {
         opacity: 0;
         transform: translateY(-60px);
      }
      100% {
         opacity: 1;
         transform: translateY(0px);
      }
   }
`
const SelectItem = styled.div`
   width: 100%;
   padding: 0.6rem 1rem;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
   display: flex;
   justify-content: center;
   gap: 5px;
   font-size: 17px;
   color: #2a2736;
   cursor: pointer;
   transition: 0.3s;
   &:hover {
      opacity: 0.7;
   }
`
export default HeaderMain

/* <div>
                     <img
                        src="https://img.icons8.com/color/48/000000/russian-federation.png"
                        alt=""
                     />
                     <img
                        src="https://img.icons8.com/color/48/000000/usa.png"
                        alt=""
                     />
                  </div> */
