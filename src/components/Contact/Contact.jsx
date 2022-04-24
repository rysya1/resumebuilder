import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import InputMask from 'react-input-mask'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Contact.module.css'
import ResumePreview from '../ResumePreview/ResumePreview'
import { userActions } from '../../features/user/userSlice'
import { toggleActions } from '../../features/toggle/toggleSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Contact = () => {
   const { firstName , address, city, state, postCode, elementAddress, phone } =
      useSelector((state) => state.user.content.contacts)
   const { t } = useTranslation()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const main = () => {
      navigate('/main')
   }
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

   const firstNameHandler = (e) => {
      dispatch(userActions.setFirstName(e.target.value))
   }
   const addressHandler = (e) => {
      dispatch(userActions.setAddress(e.target.value))
   }
   const cityHandler = (e) => {
      dispatch(userActions.setCity(e.target.value))
   }
   const stateHandler = (e) => {
      dispatch(userActions.setState(e.target.value))
   }
   const postСodeHandler = (e) => {
      dispatch(userActions.setPostСode(e.target.value))
   }
   const elementAddressHandler = (e) => {
      dispatch(userActions.setElementAddress(e.target.value))
   }
   const phoneHandler = (e) => {
      dispatch(userActions.setPhone(e.target.value))
   }
   return (
      <>
         <GlobalStyle />
         <div className={classes.main_container}>
            <div className={classes.container}>
               <div className={classes.contactH1}>
                  <h1>{t('contacts.main_text')}</h1>
               </div>
               <div>
                  <span className={classes.Ltsbz}>{t('contacts.Ltsbz')}</span>
                  <div>
                     <span className={classes.Ltstext}>
                        {t('contacts.Ltstext')}
                     </span>
                  </div>
               </div>
               <div>
                  <div className={classes.pAndInput}>
                     <p>{t('contacts.name')}</p>
                     <input
                        maxLength="61"
                        type="text"
                        value={firstName}
                        onChange={firstNameHandler}
                     />
                  </div>
                  <div className={classes.pAndInput}>
                     <p>{t('contacts.address')}</p>
                     <input maxLength="42" type="text" value={address} onChange={addressHandler} />
                  </div>

                  <div className={classes.d_flex}>
                     <div className={classes.city}>
                        <p>{t('contacts.city')}</p>
                        <input type="text" maxLength="42" value={city} onChange={cityHandler} />
                     </div>
                     <div className={classes.state}>
                        <p>{t('contacts.state')}</p>
                        <input type="text" maxLength="42" value={state} onChange={stateHandler} />
                     </div>
                     <div className={classes.Zipcode}>
                        <p>{t('contacts.Zipcode')}</p>
                        <input type="text" maxLength="42" value={postCode} onChange={postСodeHandler} />
                     </div>
                  </div>
                  <div className={classes.d_flex}>
                     <div className={classes.email}>
                        <p>{t('contacts.email')}</p>
                        <input
                        maxLength="42"
                           required
                           type="email"
                           value={elementAddress}
                           onChange={elementAddressHandler}
                        />
                     </div>
                     <div className={classes.phone}>
                        <p>{t('contacts.phone')}</p>
                        <InputMask
                           mask={'+\\9\\9\\6\\ (999) 999 999'}
                           type="tel"
                           disableUnderline
                           value={phone}
                           onChange={phoneHandler}
                        />
                     </div>
                  </div>

                  {toggle === true && (
                     <div className={classes.buttons}>
                        <button onClick={main} className={classes.logout}>
                           <p>{t('contacts.logout')}</p>
                        </button>
                        <button
                           className={classes.next}
                           onClick={experienceTips}
                        >
                           <p>{t('contacts.next')}</p>
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
            </div>
            <div className={classes.document_contaner}>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Contact
