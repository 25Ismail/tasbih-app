import { useState } from "react";
import "./App.css";

function App() {
  const themes = {
    blue: "#014f86",
    purple: "#6a0dad",
    pink: "#c44569",
    green: "#1b9c85",
  };
  const themeKeys = Object.keys(themes);

  const [count, setCount] = useState(0);
  const [max, setMax] = useState(33);
  const [inputValue, setInputValue] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  const themeColor = themes[themeKeys[themeIndex]];

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const reset = () => setCount(0);

  const cycleTheme = () => {
    setThemeIndex((themeIndex + 1) % themeKeys.length);
  };

  const applyMax = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value) && value > 0) {
      setMax(value);
      setCount(0);
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 style={{ color: themeColor }}>Tasbih</h1>

        <div className="limit-set">
          <input
            type="number"
            placeholder="Gräns"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="small-btn" onClick={applyMax}>
            OK
          </button>
        </div>

        <div className="counter-circle" style={{ borderColor: themeColor }}>
          <p className="count" style={{ color: themeColor }}>
            {count}
          </p>
          <p className="of">of {max}</p>
        </div>

        <div className="button-row">
          <button className="circle-btn" onClick={cycleTheme}>
            🎨
          </button>
          <button
            className="circle-btn center"
            style={{ backgroundColor: themeColor }}
            onClick={increment}
          >
            👆
          </button>
          <button className="circle-btn" onClick={reset}>
            🔄
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
