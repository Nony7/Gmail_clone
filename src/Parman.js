import React from 'react'

import { NavLink, useParams } from 'react-router-dom'

const Parman = () => {

        const params= useParams();

  return (
    <div>
             <h1>your name is { params.userName } </h1> *
    </div>
  )
}

export default Parman


