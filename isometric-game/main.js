const { app, BrowserWindow } = require('electron');

function createWindow() {

    let window = new BrowserWindow({
	width : 600,
	height : 600,
	webPreferences: {
	    nodeIntegration: true
	}
    });

    window.loadFile('index.html');
    
}

app.whenReady().then(createWindow);
