import React from 'react'
import styles from './styles.module.css'


export const Buttonx = ({ text, bgColor }) => {
  if(bgColor)
  return <button style={{ background: `rgb(${bgColor})` }} onClick={() => {console.log("color")}} className={styles.d}>{text}</button>
  else
  return <button onClick={() => {console.log("default")}} className={styles.d}>{text}</button>
  
}
