import Versions from './components/Versions'
import Home from './Home'
import Query from './views/Query'

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
      <div className="p-10px  text-amber-900" onClick={ipcHide}>
        测试点击关闭窗口pnpm
      </div>
      <Query />
      <Versions></Versions>
    </>
  )
}

export default App
