import React from 'react'
import { href } from 'react-router'

function Protected({children}) {
    const isloggedin=true
  return (
    <div>
        {isloggedin ? children: <h1>errorrr</h1>}
    </div>
  )
}

export default Protected
