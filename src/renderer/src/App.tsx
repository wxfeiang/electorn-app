import electronLogo from './assets/electron.svg';
import Versions from './components/Versions';

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const ipcHide = (): void =>{
    console.log('🍅');
    alert()
    window.api.hideWindow()
  }
  return (
    <>
     <div className='bg-amber-200 p-10px ' onClick={ ipcHide}> 测试点击关闭窗口pnpm </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator bg-amber-200 p-10">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
