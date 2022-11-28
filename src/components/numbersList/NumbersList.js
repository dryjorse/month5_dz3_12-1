import React from 'react'

function NumbersList({numbers}) {
    return (
        <ul>
            {
                numbers.map((number, key) => <li key={key}>{number}</li>)
            }
        </ul>
    )
}

export default NumbersList;