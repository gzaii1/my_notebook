console.log('预加载文件')
const { ipcRenderer } = require('electron')

Object.defineProperty(window, '__ipc__', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: {
        $send: ipcRenderer.send,
        $on: ipcRenderer.on,
    }
})

window.addEventListener('DOMContentLoaded', function () {
    ipcRenderer.on('update', function (evt) {
        console.log('update:', evt)
    })
    
    console.log('DOMContentLoaded:', window)

})