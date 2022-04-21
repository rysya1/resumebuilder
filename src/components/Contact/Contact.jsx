import React from 'react'
import { useTranslation } from 'react-i18next'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classes from './Contact.module.css'
import ResumePreview from '../ResumePreview/ResumePreview'
import { userActions } from '../../features/user/userSlice'

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Contact = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const main = () => {
      navigate('/')
   }
   const experienceTips = () => {
      navigate('/experience-tips')
   }

   const firstName = (e) => {
      dispatch(userActions.setFirstName(e.target.value))
   }
   const address = (e) => {
      dispatch(userActions.setAddress(e.target.value))
   }
   const city = (e) => {
      dispatch(userActions.setCity(e.target.value))
   }
   const state = (e) => {
      dispatch(userActions.setState(e.target.value))
   }
   const postСode = (e) => {
      dispatch(userActions.setPostСode(e.target.value))
   }
   const elementAddress = (e) => {
      dispatch(userActions.setElementAddress(e.target.value))
   }
   const phone = (e) => {
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
                     <input maxLength="80" type="text" onChange={firstName} />
                  </div>
                  <div className={classes.pAndInput}>
                     <p>{t('contacts.address')}</p>
                     <input type="text" onChange={address} />
                  </div>

                  <div className={classes.d_flex}>
                     <div className={classes.city}>
                        <p>{t('contacts.city')}</p>
                        <input type="text" onChange={city} />
                     </div>
                     <div className={classes.state}>
                        <p>{t('contacts.state')}</p>
                        <input type="text" onChange={state} />
                     </div>
                     <div className={classes.Zipcode}>
                        <p>{t('contacts.Zipcode')}</p>
                        <input type="text" onChange={postСode} />
                     </div>
                  </div>
                  <div className={classes.d_flex}>
                     <div className={classes.email}>
                        <p>{t('contacts.email')}</p>
                        <input
                           required
                           type="email"
                           onChange={elementAddress}
                        />
                     </div>
                     <div className={classes.phone}>
                        <p>{t('contacts.phone')}</p>
                        <input type="number" onChange={phone} />
                     </div>
                  </div>

                  <div className={classes.buttons}>
                     <button onClick={main} className={classes.logout}>
                        <p>{t('contacts.logout')}</p>
                     </button>
                     <button className={classes.next} onClick={experienceTips}>
                        <p>{t('contacts.next')}</p>
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <ResumePreview />
            </div>
         </div>
      </>
   )
}

export default Contact
