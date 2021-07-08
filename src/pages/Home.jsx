import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export const Home = (props) => {
    const { history } = props
    const store  = useSelector(store => store.HomeReducer)
    const { name } = store
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('store:', store, window.__ipc__)
    }, [store])
    return <div>
        <h2>{ name }</h2>
        <input type="text" onChange={e => setUsername(e.target.value)}/>
        <button onClick={() => {
            dispatch({
                type: 'name',
                payload: {
                    name: username,
                    age: (Math.random()) * 10 | 0
                }
            })
            console.log('afterChange:', name)
        }}>change name</button>
        <button onClick={() => {
                history.push('/photo')
        }}>take a photo</button>
    </div>
}