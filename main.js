const { app, BrowserWindow, ipcRenderer } = require('electron')

let mainWindow = null,
    webContents = null
const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
            contextIsolation: false,
        }
    })

    mainWindow.loadURL('http://localhost:8090/#/home')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
