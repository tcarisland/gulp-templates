const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
    const menuTemplate = [
      {
        label: "Electron Designer",
        submenu: [
          {
            label:"About",
            click: () => {
              const{dialog} = require('electron')
              console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}))
            }
          }
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    win.loadFile('index.html')

    win.on('closed', () => {
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
