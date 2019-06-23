const electron = require("electron");
const fs = require("fs");
const path = require("path");
const sanitize = require("sanitize-filename");
const ytdl = require("ytdl-core");


const { app, BrowserWindow, ipcMain, Menu } = electron;

let mainWindow;


const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    height: 550,
    width: 1000,
    resizable: true
  });
  
  const startUrl =
    process.env.ELECTRON_START_URL || `file://${__dirname}/../build/index.html`;
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  //enable garbage collector
  mainWindow.on("closed", () => {
    
    app.quit();
    mainWindow = null;
  });
};

app.on("ready", createWindow);


