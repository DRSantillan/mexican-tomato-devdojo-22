import React from 'react'
import css from './Card.styles.module.scss'

const Card = ({children}) => {
  return (
    <div className={css.card}>{children}</div>
  )
}

export default Card