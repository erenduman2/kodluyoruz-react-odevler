import React from 'react'
import styles from './styles.module.css'

let a;
export const Button = (props) => {

  if (props.type == "primary") {
    return ( <button {...props} className={styles.primary}>{props.text}</button> )
  }
  
  if (props.type == "default") {
    return ( <button {...props} className={styles.default}>{props.text}</button> )
  }

  if (props.type == "dashed") {
    return ( <button {...props} className={styles.dashed}>{props.text}</button> )
  }

  if (props.type == "text") {
    return ( <button {...props} className={styles.text}>{props.text}</button> )
  }

  if (props.type == "link") {
    return ( <button {...props} className={styles.link}>{props.text}</button> )
  }

  
}
