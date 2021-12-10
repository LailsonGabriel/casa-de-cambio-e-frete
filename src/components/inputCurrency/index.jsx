import React from 'react'
import { currencies } from '../../services/reusable'
import { Label } from './styles'

export default function CurrencyInput({ name, labelTitle, onChange, input, value }) {
  return (
    <Label data-testid="form">
      <span>{ labelTitle }</span>
      { input ? 
        <input
          type="text"
          name={name}
          value={ value }
          onChange={ onChange }
        /> : 
        <select name={ name } onChange={onChange} value={value}>
          { currencies.map((currency, i) => (
            <option key={i} value={currency} data-testid={currency}>{currency}</option>
          )) }
        </select>
      }
    </Label>
  )
}
