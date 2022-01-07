import axios from "axios";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const parent = "container-fluid";
  const header = "row bg-secondary text-light";
  const headstyle = "d-flex align-items-center p-3";
  const inputfeild = "row mt-2";
  const chatstyle1 = "alert alert-secondary border-secondary text-dark";
  const chatstyle2 = "text-end alert alert-secondary boder-secondary text-dark";
  const studentName = "Ajinkya Ugale";
  const studentId = "210940320006";

  const [text, setText] = useState("");
  const [list, setlist] = useState([]);

  const getText = (e) => {
    setText(e.target.value);
  };

  const sendMsg = () => {
    if (text !== "") {
      let newList = [...list, text];
      setlist(newList);
    }
  };

  return (
    <div className={parent}>
      <div className={header}>
        <div classname={headstyle}>
          <h2>MyChatApp</h2>
          <h6 className="m-0 ms-2">
            by {studentName}/{studentId}
          </h6>
        </div>
      </div>
      <div className={inputfeild}>
        <div>
          <input
            className="w-75 p-4"
            style={{ "border-radius": "10px" }}
            type="text"
            placeholder="Lets chat here..."
            onChange={getText}
          />
          <input
            className="p-4 ms-2"
            style={{ "border-radius": "10px", width: "130px" }}
            type="button"
            value="send"
            onClick={sendMsg}
          />
        </div>
        <div>
          {list.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <div key={index} className={chatstyle1}>
                  {item}
                </div>
              );
            } else {
              return (
                <div key={index} classname={chatstyle2}>
                  {item}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
