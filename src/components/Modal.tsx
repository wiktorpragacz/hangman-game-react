import * as Dialog from "@radix-ui/react-dialog";
import { useUserQuess } from "../context/UserQuessProvider";
import { useQuessingWord } from "../context/QuessWordProvider";
import JSConfetti from "js-confetti";

const Modal = () => {
  const { blunders, win } = useUserQuess();
  const { quessWord } = useQuessingWord();

  const jsConfetti = new JSConfetti();

  win && jsConfetti.addConfetti();

  return (
    <Dialog.Root open={blunders === 6 || win}>
      <Dialog.Overlay className="overlayShow inset-0 fixed bg-gray-900/30 flex justify-center items-center" />
      <Dialog.Content className="absolute flex-col shadow-md flex items-center justify-center rounded-lg border-2 w-[400px] h-[200px] bg-white ">
        <h1
          className={`${
            win ? "text-green-500" : "text-red-500"
          } text-3xl font-semibold uppercase`}
        >
          {blunders === 6 ? "you lost" : win && "you won"}
        </h1>
        <p className="text-slate-700">
          The correct word was <span className="uppercase">"{quessWord}"</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="uppercase bg-white hover:bg-blue-500 hover:text-white transition-colors text-blue-500 border px-4 py-1 rounded-xl mt-5"
        >
          restart
        </button>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
