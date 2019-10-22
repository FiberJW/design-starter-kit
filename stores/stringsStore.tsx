import React, { createContext, useContext, ReactNode } from 'react';
import { types } from 'mobx-state-tree';

const StoreT = types.model('StringsStore', {
  strings: types.map(types.string),
});

const store = StoreT.create({
  strings: {
    headerText: '🥤Design Starter Kit',
  },
});

const StoreContext = createContext(store);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
