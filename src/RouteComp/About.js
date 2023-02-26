import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
const About = () => {

  const location = useLocation()
  const params = useParams();
  console.log(params)
  console.log(location.state)
  return (
    <div>About</div>
  )
}

export default About