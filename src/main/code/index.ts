import { app } from 'electron';
import { registerIpc } from './ipc';
import { createWindow } from './window';

app.whenReady().then(() => {
  const win = createWindow();
  registerIpc(win);
});

export default { createWindow };
