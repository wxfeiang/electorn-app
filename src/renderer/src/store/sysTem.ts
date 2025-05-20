import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IEnvConfig {
  key: string | number | bigint
  name: string
  type: 'dev' | 'prod' | string // 明确可选类型，保留扩展性
  url: string
}

interface IGlobalParam {
  key: string
  name: string
  value: string
  position: 'Header' | 'Query' | 'Body' // 常用的参数位置
  status: boolean
}

interface IConfig {
  env: IEnvConfig[] // 动态环境键名（如 dev/prod）
  globalParams: IGlobalParam[]
  currentEnv: number
}
const initialState: IConfig = {
  env: [
    {
      key: 'dev',
      name: '开发环境',
      type: 'dev',
      url: 'http://localhost:3000',
    },
    {
      key: 'prod',
      name: '生产环境',
      type: 'prod',
      url: 'http://localhost:8888',
    },
  ],
  globalParams: [
    {
      key: 'Authorization',
      name: 'Authorization',
      value: 'qingqiutoken',
      position: 'Header',
      status: true,
    },
    {
      key: 'skin',
      name: 'skin',
      value: 'skin',
      position: 'Header',
      status: true,
    },
  ],
  currentEnv: 0,
}

const updateSysTem = (data: IEnvConfig[]): void =>
  useSysTemStore.setState((state) => {
    const index = state.env.findIndex((item) => item.key === data[0].key)
    const newArr = JSON.parse(JSON.stringify(state.env))
    newArr.splice(index, 1, ...data)
    return { ...state, env: newArr }
  })
const updateGlobalParams = (data: IGlobalParam[]): void =>
  useSysTemStore.setState((state) => {
    return { ...state, globalParams: [...data] }
  })
const updateCurrentEnv = (data: number): void =>
  useSysTemStore.setState((state) => {
    return { ...state, currentEnv: data }
  })

const useGetParmas = (position: 'Header' | 'Query' | 'Body'): IGlobalParam[] =>
  useSysTemStore((state) => {
    return state.globalParams.filter(
      (item) => item.position === position && item.status === true,
    )
  })

const useSysTemStore = create<IConfig>()(
  immer(
    subscribeWithSelector(
      persist(
        () => ({
          ...initialState,
        }),
        {
          name: 'sysTem',
        },
      ),
    ),
  ),
) as unknown as typeof useSysTemStore

export {
  useSysTemStore,
  updateSysTem,
  updateGlobalParams,
  updateCurrentEnv,
  useGetParmas,
}
