import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setvalue] = useState(0)

  useEffect(() => {
    console.log('usee effect')
    if (value >= 1) {
      document.title = `New Title (${value})`
    }
  }, [value])

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setvalue(value + 1)}>
        click dis
      </button>
    </>
  )
}

export default UseEffectBasics
