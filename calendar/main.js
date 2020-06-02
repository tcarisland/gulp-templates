const { app, shell, dialog, BrowserWindow, Menu } = require('electron')
const defaultMenu = require('electron-default-menu');
const fs = require('fs');
let win;

function onImportScheduleClicked(item, focusedWindow) {
  dialog.showOpenDialog(BrowserWindow, {
    properties: ['openFile']
  }).then(result => {
    console.log(result.canceled)
    console.log(result.filePaths)
    if(!result.canceled && !(result.filePaths === undefined)) {
      openFile(result.filePaths[0]);
    }
  }).catch(err => {
    console.log(err)
    dialog.showErrorBox(err);
  })
}

function openFile(filepath) {
  console.log("opening : " + filepath);
  var data = fs.readFile(filepath, function(err, data) {
    if(err) {
      dialog.showErrorBox("Filesystem Error", "Could not read file : " + filepath);
    } else {
      console.log("Asynchronous read: " + data.toString());
      win.webContents.executeJavaScript("calendar.import(" + data.toString() + ")");
    }
  })
}

function createWindow() {
  win = new BrowserWindow({
	width: 1100,
	height: 800,
	webPreferences: {
	    nodeIntegration: true
	   }
  })
  var menu = defaultMenu(app, shell)
  menu.splice(4, 0, {
      label: 'Schedule',
      submenu: [
        {
          label: 'Import Schedule',
          click: (item, focusedWindow) => {
            onImportScheduleClicked(item, focusedWindow);
          }
        },
        { label: 'Export Schedule'}
      ]
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
