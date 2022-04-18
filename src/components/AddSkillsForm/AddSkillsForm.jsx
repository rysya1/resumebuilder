import React from 'react'
import { useDispatch } from 'react-redux'
import { removeSkill } from '../../features/skill/skillSlice'
import classes from './AddSkillForm.module.css'
const AddSkillsForm = ({ skill }) => {
    const dispatch = useDispatch()

    const  removeSkillHandler = (id) => {
        dispatch(removeSkill(id))
    }
	return (
		<div className={classes.container_skill_items}>
			<div className={classes.skill_items}>
				<div className={classes.icon}>
					<img src='https://img.icons8.com/small/24/ffffff/expand.png' />
				</div>
				<span>{skill.text}</span>
				<div className={classes.icon_delete} onClick={removeSkillHandler}>
                   
                
					<img src='https://img.icons8.com/ios-glyphs/26/ffffff/delete-sign.png' />
				</div>
				{/* <img src="https://img.icons8.com/ios/24//delete-forever--v1.png"/> */}
			</div>
		</div>
	)
}

export default AddSkillsForm
