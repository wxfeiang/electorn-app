import { BrowserWindow, ipcMain } from 'electron'
export const registerIpc = (win: BrowserWindow): void => {
  ipcMain.on('hideWindow', () => {
    win.hide()
  })
  ipcMain.handle('sendRequest', async (event, { url }) => {
    console.log('🍶[url]:', url)
  })
}
