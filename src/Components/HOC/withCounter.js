import React, { useState } from 'react'

const withCounter = (PrevComp) => ({name}) =>  {

  const [count, setCount] = useState(1);

  const onIncrementCount = () => {
    setCount(count + 1);
  };

  // const onDecrement = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <PrevComp name={name} count={count} onIncrementCount={onIncrementCount} />
    </div>
  )
}

export default withCounter