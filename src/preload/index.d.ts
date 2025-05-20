import { ElectronAPI } from '@electron-toolkit/preload'

interface SendRequestParams {
  url: string
  method: string
  headers: Record<string, string>
  body?: Record<string, string>
}
declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      sendRequest: (params: SendRequestParams) => void
    }
  }
}
