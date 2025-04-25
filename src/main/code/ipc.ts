import { BrowserWindow, ipcMain } from 'electron'
export const registerIpc = (win: BrowserWindow): void => {
  ipcMain.on('hideWindow', () => {
    win.hide()
  })
}
