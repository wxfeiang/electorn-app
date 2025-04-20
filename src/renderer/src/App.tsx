import Versions from './components/Versions';

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const ipcHide = (): void =>{
    console.log('🍅');
    alert("确定要关闭嘛？ ")
    window.api.hideWindow()
  }
  return (
    <>
     <div className='bg-amber-200 p-10px ' onClick={ ipcHide}> 测试点击关闭窗口pnpm </div>

      <Versions></Versions>
    </>
  )
}

export default App
