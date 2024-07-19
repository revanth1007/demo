import { useState } from 'react';

function Tic() {

  const [value, setValue] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)
  const [stop, setStop] = useState(false)

  const display = (val) => {
    let disVal
    if (player) {
      disVal = 'X'
    } else {
      disVal = 'O'
    }

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if ((value[a] && value[a] === value[b] && value[a] === value[c]) && (value[a] !== '' && value[b] !== '')) {
        return setStop(true)
      }
    }

    if (!stop) {
      if (value[val] === '') {
        let dummy = [...value]
        dummy[val] = disVal
        setValue(dummy)
        setPlayer(!player)
      }
    }

  }



  return (
    <div className="App">
      <h2>tic tac toi</h2>
      <div>
        {!stop &&
          <p style={{ textAlign: "left" }}>{player ? "player 1 X" : "player 2 O"}</p>
        }
        {stop &&
          <p style={{ textAlign: "left" }}>Game Up</p>
        }
        <div style={{ display: 'flex' }}>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(0)}>{value[0]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(1)}>{value[1]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(2)}>{value[2]}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(3)}>{value[3]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(4)}>{value[4]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(5)}>{value[5]}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(6)}>{value[6]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(7)}>{value[7]}</div>
          <div style={{ width: '20px', height: '20px', border: '1px solid black', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => display(8)}>{value[8]}</div>
        </div>
      </div>
      <div style={{}}>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default Tic;
