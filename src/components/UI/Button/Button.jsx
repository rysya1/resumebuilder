import React from 'react'
import classes from './Button.module.css'
const Button = () => {
   return (
      <div className={classes.d_flex}>
         <button className={classes.logout}>НАЗАД</button>
         <button className={classes.next}>ДАЛЕЕ</button>
      </div>
   )
}

export default Button
