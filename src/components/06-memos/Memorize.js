import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

import '../02-useEffect/effects.css'

export const Memorize = () => {

    const { counter, increment } = useCounter()
    const [show, setShow] = useState(true);

  return (
    <div>
        <h1>Counter: <Small value={ counter } /></h1>
        <hr/>

        <button onClick={ increment } className='btn btn-primary'>
             +1 
        </button>

        <button 
            className='btn btn-outline-primary ml-3 m-1'
            onClick={ ()=> {
                setShow( !show )
            }}
        >
            show/hide { JSON.stringify( show )}
        </button>
    </div>
  )
}
