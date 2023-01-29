import React, { useState, useEffect } from 'react'

const FuncLC = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const onIncrement = () => {
    setCount(count + 1);
  }

  const onIncrement2 = () => {
    setCount2(count2 + 1);
  }

  useEffect(() => {
    console.log('UseEffect Called');
  }, [count , count2])

  useEffect(() => {
    console.log('UseEffect 2 Called');
  }, [ count2])

  useEffect(() => {
      return (()=> {
        console.log('Unmounted')
      })
  })

  return (
    <div>
      {console.log('render')}
        <h3>Count - {count}</h3>
        <h3>Count2 - {count2}</h3>

        <div>
          <button onClick={onIncrement}>Inc</button>
          <button onClick={onIncrement2}>Inc2</button>
        </div>
    </div>
  )
}

export default FuncLC