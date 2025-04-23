import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
const initialState = {
  fish: 0,
  // 可以随机拓展字段
};

const addOneFish = (): void =>
  useFoodsStore.setState((state) => ({ fish: state.fish + 1 }));
const removeOnefilsh = (): void =>
  useFoodsStore.setState((state) => ({ fish: state.fish - 1 }));
const removeAllFish = (): void => useFoodsStore.setState(() => ({ fish: 0 }));
const useFoodsStore = create<typeof initialState>()(
  immer(
    subscribeWithSelector(
      persist(
        () => ({
          ...initialState,
        }),
        {
          name: 'config',
        }
      )
    )
  )
);

export { addOneFish, removeAllFish, removeOnefilsh, useFoodsStore };
