import React, { useEffect } from 'react'

export const Shopping = (props) => {
    const { history } = props
    return <div>Shopping
        <button onClick={() => {
            history.push('/home')
        }}>goto home</button>
    </div>
}