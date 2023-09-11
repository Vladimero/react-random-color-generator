import { useState } from 'react';
import useGenerateRandomColor from './useGenerateRandomColor';

export default function App() {
  const { color, generateColor } = useGenerateRandomColor();

  const [width, setWidth] = useState(60);
  const [height, setHeight] = useState(20);
  const submitSizeExtend = () => {
    setWidth(100);
    setHeight(60);
  };
  const submitSizeShrink = () => {
    setWidth(30);
    setHeight(10);
  };

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Random Color Generator
      </h1>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Generated Color:</h3>
        <br />
        <br />
        <output
          className="colorBox"
          style={{
            backgroundColor: '#' + color,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'larger',
            border: '2px solid #000',
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {color}
        </output>
      </div>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <br />
        <button
          style={{
            padding: '10px',
            borderRadius: '10px',
            fontSize: 'larger',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          onClick={generateColor}
        >
          Generate
        </button>
      </div>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <br />
        <label>Ask for hue: </label>
        <br />
        <br />
        <input></input>
        <button
          style={{
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <br />
        <label>Ask for lightness: </label>
        <br />
        <br />
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
        <button
          style={{
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label>Extend the Colorbox!</label>
        <br />
        <br />
        <button
          style={{
            fontWeight: 'bold',
          }}
          onClick={submitSizeExtend}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          height: '10vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label> Shrink the Colorbox!</label>
        <br />
        <br />
        <button
          style={{
            fontWeight: 'bold',
          }}
          onClick={submitSizeShrink}
        >
          Submit
        </button>
      </div>
    </>
  );
}
