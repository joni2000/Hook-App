import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
            <div>Counter With Hook: { state }</div>
            <hr/>

            <button onClick={ ()=> increment(2) } className='btn btn-success'> +1 </button>
            <button onClick={ reset } className='btn btn-primary'> Reset </button>
            <button onClick={ ()=> decrement(2) } className='btn btn-alert'> -1 </button>
        </>

    )
}

export default CounterWithCustomHook