import React, { useState, useEffect } from 'react'
import classes from './Skills.module.css'
import { useNavigate } from 'react-router-dom'

import ResumePreview from '../ResumePreview/ResumePreview'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AddSkillsForm from '../AddSkillsForm/AddSkillsForm'
import { addSkill } from '../../features/skill/skillSlice'
import { v4 } from 'uuid'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`

const Skills = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const skills = useSelector((state) => state.skills.skills)
		useEffect(() => {
		localStorage.setItem('skills', JSON.stringify(skills))
		const data = JSON.parse(localStorage.getItem('skills'))
		console.log(data);
	}, [skills])

	const skillsTips = () => {
		navigate('/skill-tips')
	}
	const finish = () => {
		navigate('/finish-project')
	}
	const skillsChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	const submitHandler = (e) => {
		// e.preventDefault()
		const skill = {
			id: v4(),
			text: title,
		}

		if (title.trim().length > 0) {
			dispatch(addSkill(skill))
		}

		setTitle('')
	}
	return (
		<>
			{/* <HeaderMain /> */}
			<GlobalStyle />
			<div className={classes.main_container}>
				<div className={classes.container}>
					<div className={classes.experience_text}>
						<h1>Навыки</h1>{' '}
						<span>
							Навыки, которые вы добавляете, должны отражать
							требования работы, на которую вы претендуете.
						</span>
					</div>
					<div className={classes.pAndInput}>
						<p>Навыки</p>
						<div className={classes.d_flex}>
							<input
								value={title}
								type='text'
								placeholder='Навыки'
								onChange={skillsChangeHandler}
							/>
							<button
								className={classes.buttonAdd}
								onClick={() => submitHandler()}
							>
								<span>ДОБАВИТЬ</span>
							</button>
						</div>
					</div>
					{skills.map((skill) => (
						<AddSkillsForm key={skill.id} skill={skill} />
					))}
					<div className={classes.buttons}>
						<button className={classes.logout} onClick={skillsTips}>
							<p>НАЗАД</p>
						</button>
						<button onClick={finish} className={classes.next}>
							<p> ДАЛЕЕ</p>
						</button>
					</div>
				</div>
				<div>
					<ResumePreview />
				</div>
			</div>
		</>
	)
}

export default Skills
