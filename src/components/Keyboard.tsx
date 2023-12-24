import { letters } from "../../data";
import { UserQuessContext, useUserQuess } from "../context/UserQuessProvider";
import { LetterType } from "../../data";
import { useEffect, useRef } from "react";

const Keyboard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { userQuess, setUserQuess }: UserQuessContext = useUserQuess();

  function handleUserQuess(letter: LetterType, id: number) {
    letters.map((letter) => {
      if (letter.id === id) {
        letter.clicked = true;
      }
    });
    setUserQuess(letter.letter);
  }

  function handleKeyboard(e: React.KeyboardEvent<HTMLButtonElement>) {
    letters.find(
      (item) => item.letter === e.key && handleUserQuess(item, item.id)
    );
  }

  useEffect(() => {
    ref?.current?.focus();
  }, [userQuess]);

  return (
    <section
      ref={ref}
      tabIndex={0}
      onKeyDown={handleKeyboard}
      className="mt-5 flex focus:outline-none focus:ring-0 gap-2 max-w-sm justify-center flex-wrap"
    >
      {letters.map((item) => (
        <button
          disabled={item.clicked}
          onClick={() => handleUserQuess(item, item.id)}
          className={`${
            item.clicked && "bg-red-300 dark:bg-red-400 pointer-events-none"
          } text-2xl  rounded-md border w-10 h-10 transition-colors`}
          key={item.id}
        >
          {item.letter.toUpperCase()}
        </button>
      ))}
    </section>
  );
};

export default Keyboard;
