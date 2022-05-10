import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter()

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                    ? //si verdadero ternariio
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    : //si falso ternario
                    (
                        <blockquote className='blockquote text-center'>
                            <p className='mb-3'> { quote } </p>
                            <footer className='blockquote-footer text-rigth'>{ author }</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={ increment }>
                Siguiente frase
            </button>

        </div>
    )
}
