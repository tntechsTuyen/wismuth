const contextBridge = require('electron').contextBridge;
const ipcRenderer = require('electron').ipcRenderer;

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// Exposed protected methods in the render process
contextBridge.exposeInMainWorld(
    // Allowed 'ipcRenderer' methods
    'bridge', {
        // From main to render
        sendSettings: (message) => {
            ipcRenderer.on('sendSettings', message);
        }
    }
);