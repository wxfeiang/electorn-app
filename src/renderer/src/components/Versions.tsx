import { useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)
  return (
    <div className='fixed bottom-2 left-0 right-0 w-full'>
      <ul className=" flex gap-4 justify-center">
        <li className="electron-version">当前环境</li>
        <li className="electron-version">Electron v{versions.electron}</li>
        <li className="chrome-version">Chromium v{versions.chrome}</li>
        <li className="node-version">Node v{versions.node}</li>
      </ul>
      <ul className=" flex gap-4 justify-center">
        <li className="electron-version">版本号 v{import.meta.env.VITE_APP_VERSION}</li>
      </ul>
    </div>
  )
}

export default Versions
