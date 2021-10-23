import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [perople, setpeople] = React.useState(data)
  return (
    <>
      {perople.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
          </div>
        )
      })}
      <button className='btn' onClick={() => setpeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
