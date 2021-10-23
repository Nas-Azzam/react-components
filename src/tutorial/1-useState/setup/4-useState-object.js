import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'gogo',
    age: 34,
    message: 'random call',
  })

  // can also done  by small useStates
  // const [name, setName] = useState('pepe')
  // const [age, setAge] = useState(20)
  // const [message, setMessage] = useState('hihihi')

  const changeMessage = () => {
    // for object
    setPerson({ ...person, message: 'hello meo meo' })
    // for indpendant declaratoion od use state
    // setMessage('hellow meo meo')
  }
  return (
    <>
      {/* <h2>{name}</h2> */}
      {/* <h2>{age}</h2> */}
      {/* <h2>{message}</h2> */}

      <h5>{person.name}</h5>
      <h5>{person.age}</h5>
      <h5>{person.message}</h5>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
