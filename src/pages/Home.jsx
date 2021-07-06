import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export const Home = () => {
    const store  = useSelector(store => store.HomeReducer)
    const { name } = store
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('store:', store)
    }, [store])
    return <div>
        <h2>{name}</h2>
        <input type="text" onChange={e => setUsername(e.target.value)}/>
        <button onClick={() => {
            dispatch({
                type: 'name',
                payload: {
                    name: username,
                    age: (Math.random()) * 10 | 0
                }
            })
        }}>change name</button>
    </div>
}