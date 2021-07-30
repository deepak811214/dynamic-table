import "./styles.css";
import { useState } from "react";
export default function App() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  let [rows, setRows] = useState([]);
  const createTable = () => {
    rows = [];
    for (let i = 0; i < row; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < column; idx++) {
        let cellID = `cell${i}-${idx}`;
        cell.push(<td key={cellID} id={cellID}></td>);
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    setRows([...rows]);
    console.log(rows);
  };
  return (
    <div className="App">
      <input
        name="row"
        value={row}
        onChange={(e) => setRow(e.target.value)}
      ></input>
      <input
        name="column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      ></input>
      <button onClick={createTable}>Create Table</button>
      {rows}
    </div>
  );
}
