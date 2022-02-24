import React from 'react'
import css from './MealItemForm.styles.module.scss'
import Input from '../../ui/input/Input.component'

const MealItemForm = () => {
  return (
    <form className={css.form}>
        <Input label='Amount ' input={{id: 'amount', type: 'number',min: '1',max: '5', step: '1', defaultValue: '1'}}/>
        <button>+</button>
    </form>
  )
}

export default MealItemForm