import React from 'react'
import { Total } from './styles'

export default function TotalAmout({ currency, convert, to }) {
  return (
    <Total>
    <h1>Total :</h1>
      <h1>{
      (currency * convert).toLocaleString('pt-br',{style: 'currency', currency: to})
      }</h1>
    </Total>
  )
}
