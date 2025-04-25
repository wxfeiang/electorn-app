import Versions from './components/Versions'
import Home from './Home'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const ipcHide = (): void => {
    console.log('🍅')
    alert('确定要关闭嘛？ ')
    window.api.hideWindow()
  }
  return (
    <>
      <Home></Home>
      <div className="bg-amber-200 p-10px " onClick={ipcHide}>
        {' '}
        测试点击关闭窗口pnpm{' '}
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
