import React, { memo, useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 )
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{ counter }</small> </h3>
        <hr/>

        <p> { memoProcesoPesado } </p>

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
