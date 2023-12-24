import { useUserQuess } from "../context/UserQuessProvider";

const Gallows = () => {
  const { blunders } = useUserQuess();

  const arr = [
    <div className="head"></div>,
    <div className="body"></div>,
    <div className="right-arm"></div>,
    <div className="left-arm"></div>,
    <div className="right-leg"></div>,
    <div className="left-leg"></div>,
  ];

  return (
    <section className="gallows">
      <div className="bottom"></div>
      <div className="top">
        <div className="line">
          {arr.map((item, index) => index + 1 <= blunders && item)}
        </div>
      </div>
    </section>
  );
};

export default Gallows;
