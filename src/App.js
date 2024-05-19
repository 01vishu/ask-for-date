import Begging from "./file/Begging.gif";
import Sad from "./file/sad1.gif";
import Cart from "./file/peach-goma-cart.gif";
import Phone from "./file/peach-goma-phone.gif";
import "./App.css";
import { useRef, useState } from "react";

const getRandomPosition = () => {
  const top = Math.floor(Math.random() * 90 + 5) + "%";
  const left = Math.floor(Math.random() * 90 + 5) + "%";
  return { top, left };
};

function App() {
  const screen1 = (
    <div className="flex flex-col items-center gap-2">
      <img src={Begging} alt="" className="max-w-40" />
      <h1 className="text-xl lg:text-3xl font-semibold">
        Could we go on a Date?👉👈
      </h1>
    </div>
  );
  const screen2 = (
    <div className="flex flex-col items-center gap-2">
      <img src={Sad} alt="" className="max-w-40" />
      <h1 className="text-xl lg:text-3xl font-semibold">Soch lo ache se! 🙄</h1>
      <p>itni jldi nhi nhi bol te🙄</p>
    </div>
  );
  const screen3 = (
    <div className="flex flex-col items-center gap-2">
      <img src={Phone} alt="" className="max-w-40" />
      <h1 className="text-xl lg:text-3xl font-semibold">
        Manjao na! Kitna bhav khaogi 🙂
      </h1>
      <p>bhaut glt baat hai 🙂</p>
    </div>
  );
  const screen4 = (
    <div className="flex flex-col items-center gap-2">
      <img src={Cart} alt="" className="max-w-40" />
      <h1 className="text-xl lg:text-3xl font-semibold">
        Hehehe, I knew that😊
      </h1>
    </div>
  );

  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(1);

  const elementRef = useRef(null);

  const moveRandomEl = () => {
    if (elementRef.current && rejected >= 3) {
      const { top, left } = getRandomPosition();
      elementRef.current.style.position = "absolute";
      elementRef.current.style.top = top;
      elementRef.current.style.left = left;
    }
  };
  return (
    <div className="relative bg-red-100/40">
      <div className="flex justify-center items-center h-svh">
        <div className="flex flex-col gap-2 items-center">
          {rejected === 1 && !approved && screen1}
          {rejected === 2 && !approved && screen2}
          {rejected >= 3 && !approved && screen3}
          {approved && screen4}
          {!approved && (
            <div className="flex items-center gap-4 mt-4">
              <button onClick={() => setApproved(true)}>Yes</button>
              <button
                onClick={() => {
                  setRejected((prev) => prev + 1);
                  rejected >= 3 && moveRandomEl();
                }}
                onMouseEnter={moveRandomEl}
                ref={elementRef}
              >
                No
              </button>
            </div>
          )}
        </div>
        <footer className="fixed bottom-0 text-lg">
          Made with ❤️ by{" "}
          <a className="text-blue-500 underline" href="https://vishuverma.site">
            Vishucodes
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
