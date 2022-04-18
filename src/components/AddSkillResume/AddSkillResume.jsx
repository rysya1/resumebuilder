import React from 'react'
import classes from './AddSkillResume.module.css'
const AddSkillsResume = ({ skill }) => {
	return (
		<div className={classes.container_skill_items}>
			<div className={classes.skill_items}>
			<ul>
                <li>{skill.text}</li>
            </ul>
				
			</div>
		</div>
	)
}

export default AddSkillsResume