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
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Random Color Generator
      </h1>
      <hr />

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
        <h4>Ask for hue: </h4>
        <br />
        <br />
        <select>
          <option>red</option>
          <option>orange</option>
          <option>yellow</option>
          <option>blue</option>
          <option>purple</option>
          <option>pink</option>
          <option>white</option>
          <option>black</option>
          <option>green</option>
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
        <br />
        <br />
        <h4>Ask for lightness: </h4>
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
        <h4>Extend the Color Box!</h4>
        <br />
        <br />
        <button
          style={{
            fontWeight: 'bold',
          }}
          onClick={submitSizeExtend}
        >
          +
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
        <h4> Shrink the Color Box!</h4>
        <br />
        <br />
        <button
          style={{
            fontWeight: 'bold',
          }}
          onClick={submitSizeShrink}
        >
          -
        </button>
      </div>
    </div>
  );
}
