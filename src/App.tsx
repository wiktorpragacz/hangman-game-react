import Gallows from "./components/Gallows";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import Word from "./components/Word";

const App = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <Gallows />
      <Word />
      <Keyboard />
      <Modal />
    </div>
  );
};

export default App;
