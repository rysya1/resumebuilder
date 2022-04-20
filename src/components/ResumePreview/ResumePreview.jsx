import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import AddSkillsResume from '../AddSkillResume/AddSkillResume'
import { getSkillsInLocalStorege } from '../../features/skill/skillSlice'
import classes from './ResumePreview.module.css'

const ResumePreview = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const { firstName, address, city, state, postCode, elementAddress, phone } =
      useSelector((state) => state.user.content.contacts)
   const {
      workName,
      employer,
      cityExperience,
      stateExperience,
      startDate,
      expirationDate,
      description,
   } = useSelector((state) => state.user.content.experience)

   const {
      schoolName,
      degree,
      cityEducation,
      stateEducation,
      study,
      startDateEducation,
      expirationDateEducation,
      descriptionEducation,
   } = useSelector((state) => state.user.content.education)

   const { content } = useSelector((state) => state.user)
   const skills = useSelector((state) => state.skills.skills)
   useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('skills'))
      dispatch(getSkillsInLocalStorege(saved))
   }, [])
   useEffect(() => {
      localStorage.setItem('skills', JSON.stringify(skills))
   }, [skills])
   useEffect(() => {
      localStorage.setItem('content', JSON.stringify(content))
   }, [content])

   return (
      <div className={classes.document_contaner}>
         <div className={classes.container}>
            <header className={classes.header_contact}>
               <div className={classes.contact_description}>
                  <p className={classes.name}>{firstName}</p>
                  <div className={classes.container_description}>
                     <div className={classes.description}>
                        <div className={classes.contacts_item}>
                           <img
                              className={classes.icon}
                              src="https://img.icons8.com/material/24/ffffff/worldwide-location--v1.png"
                              alt=""
                           />
                           <samp>{address}</samp>
                        </div>
                        <div className={classes.contacts_item}>
                           <img
                              className={classes.icon}
                              src="https://img.icons8.com/material/24/ffffff/worldwide-location--v1.png"
                              alt=""
                           />
                           <samp>{city}</samp>
                        </div>
                        <div className={classes.state_index}>
                           <samp>{state}</samp>
                           <samp>{postCode}</samp>
                        </div>
                        <div className={classes.contacts_item}>
                           <img
                              className={classes.icon}
                              src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png"
                              alt=""
                           />
                           <samp>{elementAddress}</samp>
                        </div>
                        <div className={classes.contacts_item}>
                           <img
                              className={classes.icon}
                              src="https://img.icons8.com/material-outlined/24/ffffff/add-phone.png"
                              alt=""
                           />
                           <samp>{phone}</samp>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section>
               <div className={classes.experience}>
                  <div className={classes.main_text}>
                     <span>{t('experience.main_text')}</span>
                  </div>
                  <div className={classes.main_description}>
                     <div>
                        <span>{workName},</span>
                        <span>{employer},</span>
                        <span>{cityExperience},</span>
                        <span>{stateExperience}</span>
                     </div>
                     <samp>{startDate}</samp>
                     <samp>{expirationDate}</samp>
                     <p>{description}</p>
                  </div>
               </div>
               <div className={classes.experience}>
                  <div className={classes.main_text}>
                     <span>{t('education.main_text')}</span>
                  </div>
                  <div className={classes.main_description}>
                     <div>
                        <span>{degree},</span>
                        <span>{study}</span>
                     </div>
                     <div>
                        <span>{schoolName},</span>

                        <span>{cityEducation},</span>
                        <span>{stateEducation}</span>
                     </div>
                     <samp>{startDateEducation}</samp>
                     <samp>{expirationDateEducation}</samp>
                     <p>{descriptionEducation}</p>
                  </div>
                  <div className={classes.experience}>
                     <div className={classes.main_text}>
                        <span>{t('skills.main_text')}</span>
                     </div>
                     {skills.map((skill) => (
                        <AddSkillsResume key={skill.id} skill={skill} />
                     ))}
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ResumePreview
