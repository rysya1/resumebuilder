import React from 'react'
import { useDispatch } from 'react-redux'
import { removeSkill } from '../../features/skill/skillSlice'
import classes from './AddSkillForm.module.css'

const AddSkillsForm = ({ skill }) => {
   const dispatch = useDispatch()

   const removeSkillHandler = () => {
      dispatch(removeSkill(skill.id))
   }
   return (
      <div className={classes.container_skill_items}>
         <div className={classes.skill_items}>
            <div className={classes.icon}>
               <img
                  src="https://img.icons8.com/small/24/ffffff/expand.png"
                  alt=""
               />
            </div>
            <span>{skill.text}</span>
            <div onClick={removeSkillHandler} className={classes.icon_delete}>
               <img
                  src="https://img.icons8.com/ios-glyphs/26/ffffff/delete-sign.png"
                  alt=""
               />
            </div>
         </div>
      </div>
   )
}

export default AddSkillsForm
