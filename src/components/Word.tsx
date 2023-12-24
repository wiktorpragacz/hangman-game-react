import { useEffect, useState } from "react";
import { WordContext, useQuessingWord } from "../context/QuessWordProvider";
import { UserQuessContext, useUserQuess } from "../context/UserQuessProvider";

const Word = () => {
  const { quessWord }: WordContext = useQuessingWord();
  const { userQuess, blunders, setBlunders, setWin }: UserQuessContext =
    useUserQuess();
  const [quessState, setQuessState] = useState(Array.from(quessWord).fill(""));

  useEffect(() => {
    const qWord = arrayFromString(quessWord);
    if (qWord.includes(userQuess)) {
      const indexes: number[] = [];
      qWord.map((word, index) => word === userQuess && indexes.push(index));
      const quessStateCopy = quessState;
      indexes.forEach((index) => (quessStateCopy[index] = userQuess));
      setQuessState([...quessStateCopy]);
    } else {
      setBlunders((oldState) => oldState + 1);
    }
  }, [userQuess]);

  function checkIfWin() {
    if (quessWord === quessState.join("")) {
      setWin(true);
    }
  }

  useEffect(() => {
    checkIfWin();
  }, [userQuess]);

  return (
    <>
      <section className="mt-10 flex justify-center  max-w-md flex-wrap gap-2">
        {quessState.map((letter, index) => (
          <div
            key={index}
            className="border-b-2 h-[45px] text-center pb-1 border-black text-4xl w-12 h- 12 font-semibold"
          >
            {letter.toUpperCase()}
          </div>
        ))}
      </section>
      <div className="mt-2 text-gray-400">{6 - blunders} tries left</div>
    </>
  );
};

function arrayFromString(word: string) {
  return word.split("");
}

export default Word;
