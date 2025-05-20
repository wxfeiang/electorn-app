import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer' // 导入 Immer 中间件

const initialState = {
  fish: 3232,
  // 可以随机拓展字段
}

const addOneFish = (): void =>
  useConfigStore.setState((state) => ({ fish: state.fish + 1 }))
const removeOnefilsh = (): void =>
  useConfigStore.setState((state) => ({ fish: state.fish - 1 }))
const removeAllFish = (): void => useConfigStore.setState(() => ({ fish: 0 }))

const useConfigStore = create<typeof initialState>()(
  immer(
    subscribeWithSelector(
      persist(
        () => ({
          ...initialState,
        }),
        {
          name: 'config',
        },
      ),
    ),
  ),
)

export { addOneFish, removeAllFish, removeOnefilsh, useConfigStore }
