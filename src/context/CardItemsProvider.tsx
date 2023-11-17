import { createContext, useState, FC, ReactNode } from 'react';

interface IDefaultValue {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: IDefaultValue = {
  count: 0,
  setCount: () => {},
};

export const CardItemsContext = createContext(defaultValue);

export const CardItemsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const value = {
    count,
    setCount,
  };

  return (
    <CardItemsContext.Provider value={value}>
      {children}
    </CardItemsContext.Provider>
  );
};
