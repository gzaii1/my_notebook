import React, { useLayoutEffect, useRef } from 'react'

export const Photo = () => {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    useLayoutEffect(() => {
        const video = videoRef.current
        console.log(navigator.getUserMedia, navigator.webkitGetUserMedia, video)
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: 'true' }, function (stream) {
                // const bloburl = window.URL.createObjectURL(stream)
                // console.log('bloburl', bloburl)
                video.srcObject = stream
                video.play()
            }, (err) => {
                console.error(err)
            })
        } 
        // else 
        // if (navigator.webkitGetUserMedia) {
        //     console.log(navigator.webkitGetUserMedia)
        //     navigator.webkitGetUserMedia({ video: true }, function (stream) {
        //         console.log('window.webkitURL.createObjectURL(stream)', window.webkitURL.createObjectURL(stream))
        //         video.src = window.webkitURL.createObjectURL(stream)
        //         video.play()
        //     }, (err) => {
        //         console.log('error', err)
        //     })
        // }
    }, [])

    const handleClick = () => {
        const video = videoRef.current
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.drawImage(video, 0,0, 800, 600)
    }
    return <><div id="photo"> this is photo</div>
        <canvas 
            width='800'
            height='600'
            ref={canvasRef}
        ></canvas>
        <video
            id="video"
            ref={videoRef}
            autoPlay={true}
        ></video>
        <button onClick={handleClick}>START!!</button>
    </>
}