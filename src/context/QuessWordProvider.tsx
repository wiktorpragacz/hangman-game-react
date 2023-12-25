import { createContext, useContext, useState } from "react";
import { words } from "../../data";

export type WordContext = {
  quessWord: string;
  setQuessWord: React.Dispatch<React.SetStateAction<string>>;
};

const WordContext = createContext<WordContext>({} as WordContext);

const QuessWordProvider = ({ children }: { children: React.ReactNode }) => {
  const [quessWord, setQuessWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)]
  );

  return (
    <WordContext.Provider value={{ quessWord, setQuessWord }}>
      {children}
    </WordContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuessingWord = () => useContext(WordContext);

export default QuessWordProvider;
